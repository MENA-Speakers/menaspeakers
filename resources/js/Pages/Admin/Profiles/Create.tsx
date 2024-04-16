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
import {Label} from "@/Components/ui/label";
import {ProfileType} from "@/types/admin-profiles";
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover";
import {Button} from "@/Components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/Components/ui/command";
import {Check, ChevronsUpDown} from "lucide-react";
import {cn} from "@/Utils/cn";
import localCountries from "@/Utils/countries";

function Create( {profile} : { profile: ProfileType }) {


  const [ imagePreview, setImagePreview ] = React.useState( profile?.image ? profile.image : null );
  const [ open, setOpen ] = React.useState( false );
  const [videoError, setVideoError] = React.useState( '' );
  const [ videoUrl, setVideoUrl ] = React.useState( '' );

  const countries = localCountries


  const formik = useFormik( {
    initialValues: {
      first_name: profile?.first_name ? profile.first_name : '',
      last_name: profile?.last_name ? profile.last_name : '',
      about: profile?.about ? profile.about : '',
      email: profile?.email ? profile.email : '',
      dob: profile?.dob ? profile.dob : '',
      phone: profile?.phone ? profile.phone : '',
      location: profile?.location ? profile.location : '',
      linkedin: profile?.linkedin ? profile.linkedin : '',
      website: profile?.website ? profile.website : '',
      fee: profile?.fee ? profile.fee : '',
      job_title: profile?.job_title ? profile.job_title : '',
      videos: profile?.videos ? profile.videos : [],
      image: null,
    },

    validationSchema: Yup.object( {
      first_name: Yup.string()
        .required( 'First Name is required' ),
      last_name: Yup.string()
        .required( 'Last name is required' ),
      email: Yup.string(),
      dob: Yup.date(),
      phone: Yup.string(),
      about: Yup.string()
        .required( 'About is required' ),
    } ),

    onSubmit: values => {
      let url = route( 'admin.profiles.store' );
      let method = 'post';

      if ( profile ) {
        url = route( 'admin.profiles.update', profile.id );
        method = 'put';
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
        router.visit( route( 'admin.profiles.index' ) );
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

  const handleVideoAdded = ( video: string ) => {
   if ( video ) {
     //validate youtube link and set videoError
      if ( !video.includes( 'youtube.com' ) ) {
        setVideoError( 'Invalid youtube link' );
        return;
      }
      formik.setFieldValue( 'videos', [ ...formik.values.videos, video ] );
      setVideoUrl( '' );
    }
  }

  return (

    <AdminLayout
    >
      <Head title="Add Profile"/>

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="">
            <h2 className=" font-semibold text-lg text-gray-900">Add Speaker Profile</h2>
            <p className={'text-neutral-500'}>This is private profile for internal use</p>
          </div>
        </div>
        <div className="sm:p-6 lg:p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="first_name"
                         id="first_name"
                         value={formik.values.first_name}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="First Name"/>
                </div>

                {
                  formik.touched.first_name && formik.errors.first_name ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.first_name}</div>
                  ) : null
                }
              </div>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="last_name"
                         id="last_name"
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
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Email</Label>
                <div className="mt-1">
                  <Input type="email"
                         name="email"
                         id="email"
                         value={formik.values.email}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Email"/>
                </div>

                {
                  formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.email}</div>
                  ) : null
                }
              </div>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Phone</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="phone"
                         id="phone"
                         value={formik.values.phone}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Phone"/>
                </div>

                {
                  formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.phone}</div>
                  ) : null
                }
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Linkedin</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="linkedin"
                         id="linkedin"
                         value={formik.values.linkedin}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="LinkedIn"/>
                </div>

                {
                  formik.touched.linkedin && formik.errors.linkedin ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.linkedin}</div>
                  ) : null
                }
              </div>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Website</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="website"
                         id="website"
                         value={formik.values.website}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="website"/>
                </div>

                {
                  formik.touched.website && formik.errors.website ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.website}</div>
                  ) : null
                }
              </div>

            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fee" className="block text-sm font-medium text-gray-700">Fee</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="fee"
                         id="fee"
                         value={formik.values.fee}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Default fee"/>
                </div>

                {
                  formik.touched.fee && formik.errors.fee ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.fee}</div>
                  ) : null
                }
              </div>
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Job Title</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="job_title"
                         id="job_title"
                         value={formik.values.job_title}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Job Title"/>
                </div>

                {
                  formik.touched.job_title && formik.errors.job_title ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.job_title}</div>
                  ) : null
                }
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</Label>
                <div className="mt-1">
                  <Input type="date"
                         name="dob"
                         id="dob"
                         value={formik.values.dob}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Job Title"/>
                </div>

                {
                  formik.touched.dob && formik.errors.dob ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.dob}</div>
                  ) : null
                }
              </div>
              <div>
                <Label htmlFor="dob" className="block text-sm font-medium text-gray-700">Location</Label>
                <div className="mt-1">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                      >
                        {formik.values.location
                          ? countries.find((country) => country.name === formik.values.location)?.name
                          : "Select Country..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search country..."/>
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandGroup>
                          {countries.map((country) => (
                            <CommandItem
                              key={country.code}
                              value={country.name}
                              onSelect={() => {
                                formik.setFieldValue("location", country.name)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formik.values.location === country.name ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {country.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                {
                  formik.touched.dob && formik.errors.dob ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.dob}</div>
                  ) : null
                }
              </div>
            </div>

            <div>
              <Label htmlFor="bio" className="block text-sm font-medium text-gray-700">About</Label>

              <div className="mt-1">
                <ReactQuill
                  theme='snow'
                  style={{height: '200px'}}
                  value={formik.values.about}
                  onChange={(e) => formik.setFieldValue('about', e)}
                />

              </div>

              {formik.touched.about && formik.errors.about ? (
                <div className='m-0.5 text-sm text-red-500'>{formik.errors.about}</div>
              ) : null}

            </div>

            <div>
              <div className='w-full lg:w-1/2 pt-6 '>
                <Label htmlFor={'file'}>Avatar</Label>
                <div {...getRootProps({className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'})}>
                  <Input {...getInputProps()} />
                  <p className={'text-sm'}>Drag 'n' Avatar Image, or click to select files</p>
                </div>

                {/*    display preview */}
                {imagePreview && (
                  <div className='mx-auto mt-3'>
                    <img src={imagePreview} className={'h-40 w-40 object-cover'} alt=''/>
                  </div>
                )}

              </div>


            </div>

            <div>
              Videos
              <div className="py-4 space-y-4">
                <div className="py-4 space-y-4">
                  <div className="flex items-center flex-col space-y-3 w-full">
                    {
                      formik.values.videos.map((video, index) => (
                        <div key={index} className="w-full">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <p>
                                {video}
                              </p>
                            </div>
                            <div>
                              <Button type={'button'} onClick={() => {
                                formik.setFieldValue('videos', formik.values.videos.filter((v, i) => i !== index))
                              }} size={'sm'} variant={'destructive'}>
                                Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <Input type="text"
                           name={`video`}
                           value={videoUrl}
                           onChange={(e) => {
                             setVideoUrl(e.target.value)
                           }}
                           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           placeholder="Video URL"/>
                  </div>
                  <div>
                    <Button type={'button'} onClick={() => handleVideoAdded(videoUrl)} size={'sm'}>
                      Add video
                    </Button>
                  </div>
                </div>
              </div>
            </div>




            <div>
              <div className="mt-1 flex justify-end">
                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                  {
                    profile ? 'Update Profile' : 'Add Profile'
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
