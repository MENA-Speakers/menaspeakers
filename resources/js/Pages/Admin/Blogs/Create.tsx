import React from 'react';
import {Head, router} from "@inertiajs/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useDropzone} from 'react-dropzone';
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import {Input} from "@/Components/ui/input";
import {Textarea} from "@/Components/ui/textarea";
import {Label} from "@/Components/ui/label";

function Create( {blog} : {blog: BlogType} ) {

  const formik = useFormik( {
    initialValues: {
      title: blog?.title ? blog.title : '',
      meta_title: blog?.meta_title ? blog.meta_title : '',
      keywords: blog?.keywords ? blog.keywords :
        'Public speaking, Communication skills, Keynote speaker, Public speaking trainer, Serial entrepreneur, Forbes contributor, Career advancement, Personal branding, Overcoming fear of public speaking, Effective communication, Impactful speeches',
      featured: blog?.featured ? blog.featured : '',
      content: blog?.content ? blog.content : '',
      excerpt: blog?.excerpt ? blog.excerpt : '',
      image: '',
    },

    validationSchema: Yup.object( {
      title: Yup.string()
        .max( 255, 'Must be 255 characters or less' )
        .required( 'Required' ),
      meta_title: Yup.string()
        .max( 75, 'Must be 75 characters or less' ),
      keywords: Yup.string()
        .max( 255, 'Must be 255 characters or less' )
        .required( 'Required' ),
      content: Yup.string()
        .min( 50, 'Must be 50 characters or More' )
        .required( 'Required' ),
      excerpt: Yup.string().required( 'Required' ),
    } ),

    onSubmit: values => {
      let postUrl = route( 'admin.blogs.store' );
      if ( blog ) {
        postUrl = route( 'admin.blogs.update', blog.slug );
      }

      axios.post( postUrl, values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      } ).then( ( response ) => {
        router.visit( route( 'admin.blogs.index'));
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

  const [ imagePreview, setImagePreview ] = React.useState( blog?.image ? blog.image : null );

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
    <AdminLayout>
      <Head title="New Blog"/>

      <div className="py-4">
        <div className="max-w-7xl mx-auto sm:p-6 lg:p-4 bg-white overflow-hidden">
          <div className={'py-4'}>
            <h1 className="text-2xl text-gray-800">New Blog </h1>

          </div>
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</label>
              <div className="mt-1">
                <Input type="text"
                       name="title"
                       id="title"
                       value={formik.values.title}
                       onChange={formik.handleChange}
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Title"/>
              </div>

              {
                formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.title}</div>
                ) : null
              }

            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Keywords </label>
              <div className="mt-1">
                <Textarea
                  rows={2}
                  name="keywords"
                  value={formik.values.keywords}
                  onChange={formik.handleChange}
                  id="keywords"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                </Textarea>
              </div>

              {
                formik.touched.keywords && formik.errors.keywords ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.keywords}</div>
                ) : null
              }

            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Excerpt </label>
              <div className="mt-1">
                <Textarea rows="2" name="excerpt"
                          value={formik.values.excerpt}
                          onChange={formik.handleChange}
                          id="excerpt"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></Textarea>
              </div>

              {
                formik.touched.excerpt && formik.errors.excerpt ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.excerpt}</div>
                ) : null
              }

            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>

              <div className="mt-1">
                <ReactQuill
                  theme='snow'
                  value={formik.values.content}
                  onChange={( e ) => formik.setFieldValue( 'content', e )}
                />

              </div>

              {formik.touched.content && formik.errors.content ? (
                <div className='m-0.5 text-sm text-red-500'>{formik.errors.content}</div>
              ) : null}

            </div>

            <div>
              <div className='w-full lg:w-1/2 '>
                <Label htmlFor={'file'}>Featured Image</Label>
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
                    blog ? 'Update Blog' : 'Add Blog'
                  }
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Create;
