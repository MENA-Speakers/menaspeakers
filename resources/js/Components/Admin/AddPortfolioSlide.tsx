import React, {useEffect} from 'react';
import {ProfileType} from "@/types/admin-profiles";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/Components/ui/sheet";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover";
import {Button} from "@/Components/ui/button";
import {cn} from "@/lib/utils";
import {CheckIcon, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/Components/ui/command";
import {Textarea} from "@/Components/ui/textarea";
import PrimaryButton from "@/Components/PrimaryButton";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {router} from "@inertiajs/react";
import {PortfolioType} from "@/types/portfolio-type";
import {useDropzone} from "react-dropzone";

interface AddPortfolioSlideProps {
  profile: ProfileType,
  portfolio?: PortfolioType
}

type PreviewFile = File & { preview: string };

function AddPortfolioSlide({profile, portfolio}: AddPortfolioSlideProps) {


  const [isEditing, setIsEditing] = React.useState( false );
  const [isOpen, setIsOpen] = React.useState( false );

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
      profileId: portfolio?.profile_id ? portfolio.profile_id : '',
      videos: [],
    },

    validationSchema: Yup.object( {
      title: Yup.string()
        .required( 'Title is required' ),
      summary: Yup.string()
        .required( 'Summary is required' ),
      fee: Yup.string()
        .required( 'Fee is required' )
    } ),

    onSubmit: values => {
      let url = route( 'admin.profiles.rate-cards.store', profile.hash_id );
      let method = 'post';

      if ( isEditing ) {
        if ( !portfolio ) {
          return;
        }
        url = route( 'admin.profiles.rate-cards.update', {profile: profile.hash_id, portfolio: portfolio.id} );
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
        setIsOpen( false );
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
    maxFiles: 3, // Increase maxFiles to allow multiple files
    //@ts-ignore
    accept: 'image/jpeg, image/png, image/gif, image/bmp, image/webp',
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger  className={'border py-1.5 px-3 rounded-lg hover:bg-slate-50'}>Add Rate Card</SheetTrigger>
      <SheetContent className={'max-w-5xl flex h-full flex-col'}>
        <SheetHeader className={''}>
          <SheetTitle className={'px-6 py-4'}>Add rate card for <span className="text-mena-300">{profile.full_name}</span></SheetTitle>

        </SheetHeader>
        <SheetDescription className={' flex-1 p-4'}>
          <form onSubmit={formik.handleSubmit}
                className=" flex flex-col h-full max-w-4xl  mx-auto py-8 px-8">
            <div className="flex-1 space-y-6 overflow-y-auto">
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
                <Label htmlFor={'file'}>Gallery</Label>
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
                             value={videoLink}
                             onChange={(e) => {
                               setVideoLink(e.target.value)
                             }}
                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                             placeholder="Video URL"/>
                    </div>
                    <div>
                      <Button type={'button'} onClick={() => {
                        handleVideoAdded(videoLink)
                        setVideoLink('')
                      }} size={'sm'}>
                        Add video
                      </Button>
                    </div>
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
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default AddPortfolioSlide;
