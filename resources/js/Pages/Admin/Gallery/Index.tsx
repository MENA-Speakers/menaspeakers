import React, { useState } from 'react';
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, router } from "@inertiajs/react";
import { useFormik } from "formik";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useDropzone } from "react-dropzone";
import DangerButton from "@/Components/DangerButton";

function Index(props) {

  const [gallery, setGallery] = useState(props.images);
  const [isOpen, setIsOpen] = useState(false);

  console.log(gallery);

  const uploadGallery = () => {
    setIsOpen(true);
  }

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




  const formik = useFormik({
    initialValues: {
      images: [],
    },

    onSubmit: values => {
      axios.post(route('admin.gallery.store'), values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then((response) => {
        formik.setSubmitting(false);
        // add return gallery to state
        setGallery(response.data);

        // close modal
        setIsOpen(false);

        // reset form
        formik.setFieldValue('images', [])
      }).catch((error) => {
        //Set formik errors
        if (error.response.status === 422) {
          formik.setErrors(error.response.data.errors);
        }
        formik.setSubmitting(false);
      });
    },
  });

  const cancelUpload = () => {
    console.log('cancel upload')
    setIsOpen(false);
    setImagesPreview([])

    // formik.setFieldValue( 'images', [])
    formik.resetForm()
  }


  return (

    <AuthenticatedLayout
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">Gallery</h2>
          <PrimaryButton onClick={uploadGallery} className="bg-gray-600 hover:bg-gray-800 text-white py-1 px-4 rounded">
            Upload Gallery
          </PrimaryButton>
        </div>
      }
    >
      <Head title="Gallery" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          {
            isOpen && (
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-6">
                <div className="p-6 bg-white border-b border-gray-200">
                  <form onSubmit={formik.handleSubmit}
                    className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
                    <div>
                      <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images</label>
                      <div {...getRootProps({ className: 'border-dashed border-2 rounded-lg mt-2 py-4 mb-6 px-4' })}>
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
                      <DangerButton type={'button'} disabled={formik.isSubmitting} onClick={() => cancelUpload()} className="">
                        Clear
                      </DangerButton>
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


          <div className="overflow-hidden ">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:gap-x-1">

              {
                gallery.map((image, index) => (
                  <div key={index}
                    className="max-w-sm bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                    <img className=" h-40 w-full object-cover" src={image.url}
                      alt="" loading='lazy'/>

                    <div className="flex justify-between">
                      <Link href={route('admin.gallery.delete', image.id)} method="post">
                        <button type="submit" className="text-xs px-3 py-2 text-red-600">Delete</button>
                      </Link>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Index;
