import React from 'react';
import {ProfileType} from "@/types/admin-profiles";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link} from "@inertiajs/react";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {Button} from "@/Components/ui/button";
import {GalleryType, VideoType} from "@/types/media";
import PrimaryButton from "@/Components/PrimaryButton";
import {useDropzone} from "react-dropzone";
import {useFormik} from "formik";
import axios from "axios";


interface PortfolioMediaProps {
  videos: VideoType[],
  gallery: GalleryType[],
  profile: ProfileType
}
function PortfolioMedia({videos, gallery, profile} : PortfolioMediaProps) {

  console.log(gallery)
  const [uploadImages, setUploadImages] = React.useState(false);
  const [images, setImages] = React.useState(gallery);
  const [imagesPreview, setImagesPreview] = React.useState([]);

  const {
    acceptedFiles,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
  } = useDropzone({
    maxFiles: 20,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {

      let files = acceptedFiles.map(file => URL.createObjectURL(file));
      setImagesPreview(files);
      formik.setFieldValue('images', acceptedFiles);
    },
  });


  const cancelUpload = () => {
    setUploadImages(false);
    setImagesPreview([])

    // formik.setFieldValue( 'images', [])
    formik.resetForm()
  }


  const formik = useFormik({
    initialValues: {
      images: [],
    },

    onSubmit: values => {
      axios.post(route('admin.profiles.media.store', profile.hash_id), values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then((response) => {
        formik.setSubmitting(false);
        // add return gallery to state
        setImages(response.data);

        // close modal
        setUploadImages(false);

        setImagesPreview([])
        setUploadImages(false);

        // reset form
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
  return (
    <AdminLayout
    >
      <Head title="Portfolio Media" />

      <AdminProfileHeader profile={profile} />

      <div className="py-4">
        <div className="flex py-4 justify-between items-center">
          <h2 className="text-lg ">{profile.first_name}'s Media</h2>
          <div className="flex items-center">
            <Button variant={'outline'}
              type="button"
              onClick={() => setUploadImages(true)}
              className="inline-flex items-center px-4 py-2 text-sm hover:bg-slate-50 transition duration-150 ease-in-out  border  rounded-md  focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Upload Media
            </Button>
          </div>
        </div>

        {
          uploadImages && (
            <div className="bg-white overflow-hidden mt-3 sm:rounded-lg mb-6">
              <div className="">
                <form onSubmit={formik.handleSubmit}
                      className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
                  <div>
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700 sr-only">Images</label>
                    <div {...getRootProps({ className: 'border-dashed border-2 bg-slate-50 rounded-lg mt-2 py-10 mb-6 px-10' })}>
                      <input {...getInputProps()} />
                      <p className={'text-sm'}>Drag 'n' Images, or click to select files</p>
                    </div>



                  </div>
                  {/*    display preview */}

                  <div className={'mx-auto mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 w-full'}>
                    {imagesPreview.map((file, index) => (
                      <div key={index} className=''>
                        <img src={file} className={'object-cover'} alt='' />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button variant={'destructive'} type={'button'} disabled={formik.isSubmitting} onClick={() => cancelUpload()} className="">
                      Cancel
                    </Button>
                    <PrimaryButton disabled={formik.isSubmitting} type="submit" className="">
                      {
                        formik.isSubmitting ? 'Uploading...' : 'Upload'
                      }
                    </PrimaryButton>

                  </div>
                </form>
              </div>
            </div>
          )
        }

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {/*{*/}
          {/*  portfolios.map((portfolio: PortfolioType, index: number) => (*/}
          {/*    <PortfolioCard key={index} portfolio={portfolio}/>*/}
          {/*  ))*/}
          {/*}*/}
        </div>
      </div>


    </AdminLayout>
  );
}

export default PortfolioMedia;
