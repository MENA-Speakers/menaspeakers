import React, {useEffect} from 'react';
import {Head, router} from "@inertiajs/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import {Textarea} from "@/Components/ui/textarea";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {PortfolioType} from "@/types/portfolio-type";
import {ProfileType} from "@/types/admin-profiles";
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover";
import {FormControl} from "@/Components/ui/form";
import {Button} from "@/Components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/Components/ui/command";
import {CheckIcon, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";
import {useDropzone} from "react-dropzone";
type PreviewFile = File & { preview: string };
function Create( {portfolio, profiles} : { portfolio: PortfolioType, profiles: ProfileType[] }) {

  const [isEditing, setIsEditing] = React.useState( false );

  useEffect(() => {
    if (portfolio) {
      setIsEditing(true);
    }
  }, [portfolio]);

  const [videoLink, setVideoLink] = React.useState('');


  const formik = useFormik( {
    initialValues: {
      title: portfolio?.title ? portfolio.title : '',
      fee: portfolio?.fee ? portfolio.fee : '',
      gallery: portfolio?.gallery ? portfolio.gallery : '',
      summary: portfolio?.summary ? portfolio.summary : '',
      profile: portfolio?.profile_id ? portfolio.profile_id : '',
      videos: [],
    },

    validationSchema: Yup.object( {
      title: Yup.string()
        .required( 'Title is required' ),
      summary: Yup.string()
        .required( 'Summary is required' ),
      profile: Yup.string()
        .required( 'Speaker is required' ),
      fee: Yup.string()
        .required( 'Fee is required' )
    } ),

    onSubmit: values => {
      let url = route( 'admin.portfolios.store' );
      let method = 'post';

      if ( isEditing ) {
        url = route( 'admin.portfolios.update', portfolio.id );
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
        router.visit( route( 'admin.portfolios.index' ) );
      } ).catch( ( error ) => {
        //Set formik errors
        if ( error.response.status === 422 ) {
          formik.setErrors( error.response.data.errors );
        }
        formik.setSubmitting( false );
      } );
    },
  } );


  const [galleryPreview, setGalleryPreview] = React.useState<PreviewFile[]>([]);

  const {
  acceptedFiles,
  getRootProps,
  getInputProps,
} = useDropzone({
  maxFiles: 6, // Increase maxFiles to allow multiple files
  accept: 'image/*', // Remove the empty array
  onDrop: (acceptedFiles: File[]) => {
    // Map through the acceptedFiles to create the previews
    setGalleryPreview(
      acceptedFiles.map(file => ({
        ...file,
        preview: URL.createObjectURL(file),
      }))
    );
    formik.setFieldValue('gallery', acceptedFiles);
  },
});

  const handleVideoAdded = (video: string) => {
    formik.setFieldValue('videos', [...formik.values.videos, video]);
  }


  return (
    <AdminLayout
    >
      <Head title="Add Porfolio"/>

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="">
            <h2 className=" font-semibold text-lg text-gray-900">Add Portfolio</h2>
            <p className={'text-neutral-500'}>Portfolio will be used to populate proposals</p>
          </div>
        </div>
        <div className="sm:p-6 lg:p-4 bg-white overflow-hidden sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</Label>
              <div className="mt-1">
                <Input type="text"
                       name="title"
                       id="title"
                       value={formik.values.title}
                       onChange={formik.handleChange}
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Title or Topic"/>
              </div>

              {
                formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.title}</div>
                ) : null
              }
            </div>
            <div className="grid grid-cols-2 gap-6">

              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Fee</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="fee"
                         id="fee"
                         value={formik.values.fee}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Speaking Fee"/>
                </div>

                {
                  formik.touched.fee && formik.errors.fee ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.fee}</div>
                  ) : null
                }
              </div>

              {
                !isEditing &&

                <div className={''}>
                  <Label htmlFor="profile" className="block text-sm font-medium text-gray-700">Speaker</Label>
                  <div className="mt-1">

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !formik.values.profile && "text-muted-foreground"
                          )}
                        >
                          {formik.values.profile
                            ? profiles.find(
                              (profile) => profile.id === formik.values.profile
                            )?.full_name
                            : "Select speaker"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search Speakers..."
                            className="h-9"
                          />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {profiles.map((profile) => (
                              <CommandItem
                                value={profile.full_name}
                                key={profile.id}
                                onSelect={() => {
                                  formik.setFieldValue("profile", profile.id)
                                  formik.setFieldValue("videos", profile.videos);
                                }}
                              >
                                {profile.full_name}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    profile.id === formik.values.profile
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>

                  </div>
                  {
                    formik.touched.profile && formik.errors.profile ? (
                      <div className="text-red-500 text-xs italic">{formik.errors.profile}</div>
                    ) : null
                  }
                </div>
              }


            </div>


            <div>
              <Label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</Label>
              <div className="mt-1">
                <Textarea name="summary"
                          value={formik.values.summary}
                          onChange={formik.handleChange}
                          id="summary"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">

                </Textarea>
              </div>

              {
                formik.touched.summary && formik.errors.summary ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.summary}</div>
                ) : null
              }

            </div>
            <div className='w-full  '>
              <Label htmlFor={'file'}>Featured Image</Label>
              <div {...getRootProps({className: 'border-dashed border-2 rounded-lg mt-2 py-4 px-4'})}>
                <input {...getInputProps()} />
                <p className={'text-sm'}>Drag 'n' Cover Image, or click to select files</p>
              </div>

              {/*    display preview */}
              <div className={'flex mt-4'}>
                {
                  galleryPreview.map((file: any, index: number) => {
                    return (
                      <div key={index} className={'w-24 h-24 mr-4'}>
                        <img src={file.preview} alt=""/>
                      </div>
                    )
                  })
                }

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
                                {video.link}
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
                           value={videoLink}
                           onChange={(e) => {
                             setVideoLink(e.target.value)
                           }}
                           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           placeholder="Video URL"/>
                  </div>
                  <div>
                    <Button type={'button'} onClick={() => handleVideoAdded(videoLink)} size={'sm'}>
                      Add video
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className={'pt-8'}>
              <div className=" flex justify-end">
                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                  {
                    portfolio ? 'Update Portfolio' : 'Add Portfolio'
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
