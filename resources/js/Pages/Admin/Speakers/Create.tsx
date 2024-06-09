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
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

interface optionType {
  value: string;
  label: string;
}
interface CreateProps {
  speaker: SpeakerType;
  locations: LocationType[];
  categories: optionType[];
  topics: optionType[];
  selectedTopics: optionType[];
  selectedCategories: optionType[];
}

function Create( {
                   speaker,
                   locations,
                   categories,
                   topics,
                    selectedCategories,
                    selectedTopics
} : CreateProps ) {



  const [ imagePreview, setImagePreview ] = React.useState( speaker?.image ? speaker.image : null );
  const [isEditing, setIsEditing] = React.useState(false);
  useEffect(() => {
    if (speaker) {
      setIsEditing(true);
    }
  }, [speaker])

  const formik = useFormik( {
    initialValues: {
      first_name: speaker?.first_name ? speaker.first_name : '',
      last_name: speaker?.last_name ? speaker.last_name : '',
      title: speaker?.title ? speaker.title : '',
      key_titles: speaker?.titles ? speaker.titles : '',
      slug: speaker?.slug ? speaker.slug : '',
      excerpt: speaker?.excerpt ? speaker.excerpt : '',
      bio: speaker?.bio ? speaker.bio : '',
      location: speaker?.location_id ? speaker.location_id : '',
      featured: speaker?.featured ? speaker.featured : false,
      image: null,
      topics: speaker?.topics ? speaker.topics : [],
      categories: speaker?.categories ? speaker.categories : [],
    },

    validationSchema: Yup.object( {
      first_name: Yup.string()
        .required( 'First Name is required' ),
      last_name: Yup.string()
        .required( 'Last Name is required' ),
      title: Yup.string()
        .required( 'Main title is required' ),

      excerpt: Yup.string()
        .required( 'Meta description is required' ),
      bio: Yup.string()
        .required( 'Bio is required' ),
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


  console.log('speaker',speaker)
  return (
    <AdminLayout
    >
      <Head title="Speaker "/>

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <h2 className=" font-semibold text-gray-900">
              {
                speaker ? 'Edit Speaker' : 'Create Speaker'
              }
            </h2>
          </div>
        </div>
        <div className="sm:p-6 lg:p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div className="flex gap-6 flex-col lg:flex-row">
              <div className={'w-full lg:w-1/2'}>
                <Label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="first_name"
                         id="name"
                         value={formik.values.first_name}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Last Name"/>
                </div>

                {
                  formik.touched.first_name && formik.errors.first_name ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.first_name}</div>
                  ) : null
                }
              </div>
              <div className={'w-full lg:w-1/2'}>
                <Label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="last_name"
                         id="name"
                         value={formik.values.last_name}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Last Name"/>
                </div>

                {
                  formik.touched.last_name && formik.errors.last_name ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.last_name}</div>
                  ) : null
                }
              </div>
            </div>

            <div>
              <Label htmlFor="title" className="block text-sm font-medium text-gray-700">Main title</Label>
              <div className="mt-1">
                <Input type="text"
                       name="title"
                       value={formik.values.title}
                       onChange={formik.handleChange}
                       id="title"
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Main title"/>
              </div>
              {
                formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.title}</div>
                ) : null
              }
            </div>
            <div>
              <Label htmlFor="key_titles" className="block text-sm font-medium text-gray-700">Keynote Titles </Label>
              <div className="mt-1">
                <Textarea
                       name="key_titles"
                       rows={5}
                       value={formik.values.key_titles}
                       onChange={formik.handleChange}
                       id="key_titles"
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Keynote Speaker, MC "/>
              </div>

              <p className="text-xs mt-1">Important to separate each title by comma (,)</p>
              {
                formik.touched.key_titles && formik.errors.key_titles ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.key_titles}</div>
                ) : null
              }

            </div>

            {/*{*/}
            {/*  !isEditing &&*/}

            {/*  <div>*/}
            {/*    <Label htmlFor="key_titles" className="block text-sm font-medium text-gray-700">Slug (speaker url)</Label>*/}
            {/*    <div className="mt-1">*/}
            {/*      <Input type="text"*/}
            {/*             name="slug"*/}
            {/*             value={formik.values.slug}*/}
            {/*             onChange={formik.handleChange}*/}
            {/*             id="slug"*/}
            {/*             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"*/}
            {/*             placeholder="saana-azzam"/>*/}
            {/*    </div>*/}

            {/*    {*/}
            {/*      formik.touched.slug && formik.errors.slug ? (*/}
            {/*        <div className="text-red-500 text-xs italic">{formik.errors.slug}</div>*/}
            {/*      ) : null*/}
            {/*    }*/}

            {/*  </div>*/}


            {/*}*/}


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

            <div className={'w-full lg:w-1/3'}>
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
                    locations.map((location) => {
                      return <option key={location.id} value={location.id}
                                     selected={location.id === formik.values.location}>{location.name}</option>;
                    })
                  }
                </select>

              </div>
              {
                formik.touched.location && formik.errors.location ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.location}</div>
                ) : null
              }
            </div>


            <div className="w-full ">
              <Label htmlFor="location" className="block text-sm font-medium text-gray-700">Topics</Label>
              <Select
                defaultValue={selectedTopics}
                onChange={(e) => formik.setFieldValue('topics', e)}
                isMulti
                name="topics"
                options={topics}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>


            <div className="w-full ">
              <Label htmlFor="location" className="block text-sm font-medium text-gray-700">Categories</Label>
              <Select
                defaultValue={selectedCategories}
                onChange={(e) => formik.setFieldValue('categories', e)}
                isMulti
                name="category"
                options={categories}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>


            <div>
              <Label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</Label>

              <div className="mt-1">
                <ReactQuill
                  theme='snow'
                  value={formik.values.bio}
                  onChange={(e) => formik.setFieldValue('bio', e)}
                />

              </div>

              {formik.touched.bio && formik.errors.bio ? (
                <div className='m-0.5 text-sm text-red-500'>{formik.errors.bio}</div>
              ) : null}

            </div>

            <div>
              <div className='w-full lg:w-1/2 '>
                <Label htmlFor={'file'}>Featured Image</Label>
                <div {...getRootProps({className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'})}>
                  <Input {...getInputProps()} />
                  <p className={'text-sm'}>Drag 'n' Cover Image, or click to select files</p>
                </div>

                {/*    display preview */}
                {imagePreview && (
                  <div className='mx-auto mt-3'>
                    <img src={imagePreview} className={'h-40 w-40 object-cover'} alt=''/>
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
