import React from 'react';
import {Input} from "@/Components/ui/input";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {SpeakerType} from "@/types/speaker-type";
import {FaqType} from "@/types/faq-type";
import {Button} from "@/Components/ui/button";
import {Textarea} from "@/Components/ui/textarea";
import {Label} from "@/Components/ui/label";
import {useDropzone} from "react-dropzone";

interface AddGalleryFormProps {
  galleryAdded : (gallery: GalleryType) => void;
  speaker : SpeakerType;
  open? : boolean;
}

function AddGalleryForm({galleryAdded, speaker} : AddGalleryFormProps) {

  const [imagePreview, setImagePreview] = React.useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      images: [],
    },

   validationSchema: Yup.object({
  images: Yup.array()
    .of(Yup.mixed().required('An image is required'))
    .min(1, 'At least one image is required')
    .required('Images are required'),
}),
    onSubmit: values => {

      axios.post(route('admin.speakers.gallery.store', speaker?.slug), values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }}
      ).then((response) => {
        formik.setSubmitting(false);
        galleryAdded(response.data);
        setImagePreview([]);
        console.log('gallery', response.data);
        formik.resetForm();
      }).catch((error) => {
        //Set formik errors
        if (error.response.status === 422) {
          formik.setErrors(error.response.data.errors);
        }
        formik.setSubmitting(false);
      });
    },
  });


 const {
  acceptedFiles,
  getRootProps: getRootProps,
  getInputProps: getInputProps,
} = useDropzone({
  maxFiles: 10, // Allow multiple files
  accept: {
    'image/*': [],
  },
  onDrop: (acceptedFiles) => {
    const imagePreviews = acceptedFiles.map(file => URL.createObjectURL(file));
    setImagePreview(imagePreviews);
    formik.setFieldValue('images', acceptedFiles);
  },
});


  return (
    <form onSubmit={formik.handleSubmit}
          className=" max-w-4xl space-y-8 mx-auto p-6">
      <div>
        <div className='w-full  '>
          <Label htmlFor={'file'}>Featured Image</Label>
          <div {...getRootProps({className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'})}>
            <input {...getInputProps()} />
            <p className={'text-sm'}>Drag 'n' Cover Image, or click to select files</p>
          </div>

          {/*    display preview */}
          {imagePreview.length > 0 && (
            <div className='mx-auto mt-3 grid grid-cols-3 gap-4'>
              {imagePreview.map((src, index) => (
                <img key={index} src={src} className={'h-40  object-cover'} alt=''/>
              ))}
            </div>
          )}

        </div>
      </div>

      <div>
        <div className="mt-2 flex justify-end">
          <Button disabled={formik.isSubmitting} type="submit">
            Upload
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddGalleryForm;
