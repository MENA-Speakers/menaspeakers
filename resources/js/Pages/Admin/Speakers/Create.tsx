import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, router} from "@inertiajs/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useDropzone} from 'react-dropzone';
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";

function Create( {speaker, locations} ) {

  const formik = useFormik( {
    initialValues: {
      name: speaker?.name ? speaker.name : '',
      meta_title: speaker?.meta_title ? speaker.meta_title : '',
      keywords: speaker?.keywords ? speaker.keywords : '',
      bio: speaker?.bio ? speaker.bio : '',
      excerpt: speaker?.excerpt ? speaker.excerpt : '',
      location: speaker?.location ? speaker.location : '',
      image: '',
    },

    validationSchema: Yup.object( {
      name: Yup.string()
        .max( 255, 'Must be 255 characters or less' )
        .required( 'Required' ),
      meta_title: Yup.string()
        .max( 75, 'Must be 75 characters or less' ),
      keywords: Yup.string()
        .max( 255, 'Must be 255 characters or less' )
        .required( 'Required' ),
      bio: Yup.string()
        .min( 50, 'Must be 50 characters or More' )
        .required( 'Required' ),
    } ),

    onSubmit: values => {
      let postUrl = route( 'admin.speakers.store' );
      if ( speaker ) {
        postUrl = route( 'admin.speakers.update', speaker.slug );
      }

      axios.post( postUrl, values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      } ).then( ( response ) => {
        router.visit( route( 'admin.speakers.index'));
        formik.setSubmitting( false );
      } ).catch( ( error ) => {
        //Set formik errors
        if ( error.response.status === 422 ) {
          formik.setErrors( error.response.data.errors );
        }
        formik.setSubmitting( false );
      } );
    },
  } );

  const [ imagePreview, setImagePreview ] = React.useState( speaker?.image ? speaker.image : null );

  const {
    acceptedFiles,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
  } = useDropzone( {
    maxFiles: 1,
    accept: {
      'image/*': [],
    },
    onDrop: ( acceptedFiles ) => {
      setImagePreview( URL.createObjectURL( acceptedFiles[ 0 ] ) );
      formik.setFieldValue( 'image', acceptedFiles[ 0 ] );
    },
  } );


  return (
    <AuthenticatedLayout
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Speaker</h2>}
    >
      <Head title="Dashboard"/>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:p-6 lg:p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input type="text"
                       name="name"
                       id="name"
                       value={formik.values.name}
                       onChange={formik.handleChange}
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Speaker Name"/>
              </div>

              {
                formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
                ) : null
              }

            </div>
            <div>
              <label htmlFor="meta_title" className="block text-sm font-medium text-gray-700">Meta title</label>
              <div className="mt-1">
                <input type="text"
                       name="meta_title"
                       value={formik.values.meta_title}
                        onChange={formik.handleChange}
                       id="meta_title"
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Meta title"/>
              </div>
              {
                formik.touched.meta_title && formik.errors.meta_title ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.meta_title}</div>
                ) : null
              }
            </div>
            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords (Comma
                Seperated)</label>
              <div className="mt-1">
                <input type="text"
                       name="keywords"
                       value={formik.values.keywords}
                        onChange={formik.handleChange}
                       id="keywords"
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Keywords, "/>
              </div>

              {
                formik.touched.keywords && formik.errors.keywords ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.keywords}</div>
                ) : null
              }

            </div>



            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Meta
                Description</label>
              <div className="mt-1">
                <textarea rows="2" name="excerpt"
                          value={formik.values.excerpt}
                          onChange={formik.handleChange}
                          id="excerpt"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
              </div>

              {
                formik.touched.excerpt && formik.errors.excerpt ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.excerpt}</div>
                ) : null
              }

            </div>

            <div className={'w-full lg:w-1/2'}>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <div className="mt-1">
                <select
                       name="location"
                       value={formik.values.location}
                       onChange={formik.handleChange}
                       id="location"
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Meta title">
                  <option disabled value="">Select Location</option>
                  {
                    locations.map( ( location ) => {
                      return <option key={location.id} value={location.id}>{location.name}</option>;
                    } )
                  }
                </select>
              </div>
              {
                formik.touched.location && formik.errors.location ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.location}</div>
                ) : null
              }
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>

              <div className="mt-1">
                <ReactQuill
                  theme='snow'
                  value={formik.values.bio}
                  onChange={( e ) => formik.setFieldValue( 'bio', e )}
                />

              </div>

              {formik.touched.bio && formik.errors.bio ? (
                <div className='m-0.5 text-sm text-red-500'>{formik.errors.bio}</div>
              ) : null}

            </div>

            <div>
              <div className='w-full lg:w-1/2 '>
                <InputLabel htmlFor={'file'}>Featured Image</InputLabel>
                <div {...getRootProps( {className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'} )}>
                  <input {...getInputProps()} />
                  <p className={'text-sm'}>Drag 'n' Cover Image, or click to select files</p>
                </div>

                {/*    display preview */}
                {imagePreview && (
                  <div className='mx-auto mt-3'>
                    <img src={imagePreview} className={'h-40 w-40 object-cover'} alt='' />
                  </div>
                )}

              </div>


            </div>
            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input id="featured" aria-describedby="featured" name="featured" value="1" type="checkbox"
                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="featured" className="font-medium text-gray-700">Featured</label>
              </div>
            </div>


            <div>
              <div className="mt-1 flex justify-end">
                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                  {
                    speaker ? 'Update Speaker' : 'Add Speaker'
                  }
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Create;
