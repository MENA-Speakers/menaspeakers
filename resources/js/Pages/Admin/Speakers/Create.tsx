import React, {useEffect} from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, router} from "@inertiajs/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useDropzone} from 'react-dropzone';
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import {Textarea} from "@/Components/ui/textarea";
import {LocationType} from "@/types/location";
import {Input} from "@/Components/ui/input";
import {SpeakerType} from "@/types/speaker-type";
import {Label} from "@/Components/ui/label";


function Create( {speaker, locations} : { speaker: SpeakerType, locations: LocationType[]} ) {



  const [ imagePreview, setImagePreview ] = React.useState( speaker?.image ? speaker.image : null );
  const [isEditing, setIsEditing] = React.useState(false);

  useEffect(() => {
    if (speaker) {
      setIsEditing(true);
    }
  }, [speaker])

  const formik = useFormik( {
    initialValues: {
      name: speaker?.name ? speaker.name : '',
      meta_title: speaker?.meta_title ? speaker.meta_title : '',
      keywords: speaker?.keywords ? speaker.keywords : '',
      slug: speaker?.slug ? speaker.slug : '',
      excerpt: speaker?.excerpt ? speaker.excerpt : '',
      bio: speaker?.bio ? speaker.bio : '',
      location: speaker?.location_id ? speaker.location_id : '',
      featured: speaker?.featured ? speaker.featured : false,
      image: null,
    },

    validationSchema: Yup.object( {
      name: Yup.string()
        .required( 'Name is required' ),
      meta_title: Yup.string()
        .required( 'Meta title is required' ),
      keywords: Yup.string()
        .required( 'Keywords are required' ),
      excerpt: Yup.string()
        .required( 'Meta description is required' ),
      bio: Yup.string()
        .required( 'Bio is required' ),
      location: Yup.string()
        .required( 'Location is required' ),
    } ),

    onSubmit: values => {
      let url = route( 'admin.speakers.store' );
      let method = 'post';

      if ( isEditing ) {
        url = route( 'admin.speakers.update', speaker.id );
      }


      axios( {
        method: method,
        url: url,
        data: values,
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      } ).then( ( response ) => {
        formik.setSubmitting( false );
        router.visit( route( 'admin.speakers.index' ) );
      } ).catch( ( error ) => {
        //Set formik errors
        if ( error.response.status === 422 ) {
          formik.setErrors( error.response.data.errors );
        }
        formik.setSubmitting( false );
      } );
    },
  } );


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
    <AdminLayout
    >
      <Head title="Speaker "/>

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <h2 className=" font-semibold text-gray-900">Add Speaker</h2>
          </div>
        </div>
        <div className="sm:p-6 lg:p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
              <div className="mt-1">
                <Input type="text"
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
              <Label htmlFor="meta_title" className="block text-sm font-medium text-gray-700">Meta title</Label>
              <div className="mt-1">
                <Input type="text"
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
              <Label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Keywords (Comma
                Seperated)</Label>
              <div className="mt-1">
                <Input type="text"
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

            {
              isEditing &&

              <div>
                <Label htmlFor="keywords" className="block text-sm font-medium text-gray-700">Slug (speaker url)</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="slug"
                         value={formik.values.slug}
                         onChange={formik.handleChange}
                         id="slug"
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="saana-azzam"/>
                </div>

                {
                  formik.touched.slug && formik.errors.slug ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.slug}</div>
                  ) : null
                }

              </div>


            }


            <div>
              <Label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Meta
                Description</Label>
              <div className="mt-1">
                <Textarea name="excerpt"
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

            <div className={'w-full lg:w-1/2'}>
              <Label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</Label>
              <div className="mt-1">
                <select
                       name="location"
                       value={formik.values.location}
                       onChange={formik.handleChange}
                       id="location"
                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                       placeholder="Meta title">
                  <option disabled value="">Select Location</option>
                  {
                    locations.map( ( location ) => {
                      return <option key={location.id} value={location.id} selected={location.id === formik.values.location} >{location.name}</option>;
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
              <Label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</Label>

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
                <Label htmlFor={'file'} >Featured Image</Label>
                <div {...getRootProps( {className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'} )}>
                  <Input {...getInputProps()} />
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
                <Input
                        onChange={formik.handleChange}
                        checked={formik.values.featured}
                  id="featured" aria-describedby="featured" name="featured" value='1' type="checkbox"
                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
              </div>
              <div className="ml-3 text-sm">
                <Label htmlFor="featured" className="font-medium text-gray-700">Featured</Label>
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
    </AdminLayout>
  );
}

export default Create;
