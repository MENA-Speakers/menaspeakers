import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AdminYoutubeVideo from "@/Components/AdminYoutubeVideo";
import AdminLayout from "@/Layouts/AdminLayout";
import {ProfileType} from "@/types/admin-profiles";
import {Button} from "@/Components/ui/button";

function Show({ profile, videos } : {profile: ProfileType, videos: VideoType[]} ) {

  const [video, setVideo] = useState(null);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [allVideos, setAllVideos] = useState(videos);

  const editVideo = (video) => {
    setVideo(video);
    setIsEditing(true);
    setOpen(true);
    formik.setFieldValue('link', 'https://www.youtube.com/watch?v=' + video.link);
  }

  const formik = useFormik({
    initialValues: {
      link: '',
      videoSource: 0,
    },

    validationSchema: Yup.object({
      //Validate youtube or vimeo link and video source option
      link: Yup.string()
        .matches(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be|vimeo\.com)\/.+$/, 'Please enter a valid video link')
        .required('Link is required'),
      videoSource: Yup.string().required('Video source is required'),
    }),

    onSubmit: values => {
      let postUrl = route('admin.profiles.videos.store', profile.slug);
      if (isEditing) {
        postUrl = route('admin.profiles.videos.update', video.id);
      }

      axios.post(postUrl, values
      ).then((response) => {
        formik.setSubmitting(false);
        setOpen(false)
        setIsEditing(false)
        formik.resetForm();
        setAllVideos(response.data);
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
      <Head title="Speaker " />

      <div className="flex justify-between">
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">{ profile.full_name}</h2>
        <Button onClick={() => setOpen(true)}>Add Video</Button>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:p-6 lg:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            allVideos?.map((video, index) => (
              <AdminYoutubeVideo key={index} video={video} />
            ))
          }

        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4  pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Add Video
                      </Dialog.Title>
                      <div className="mt-2 w-ful">
                        <form onSubmit={formik.handleSubmit}
                          className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
                          <div>
                            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Video source</label>
                            <select
                              id="videoSource"
                              name="videoSource"
                              value={formik.values.videoSource}
                              onChange={formik.handleChange}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value="">Select a video source</option>
                              <option value="youtube">YouTube</option>
                              <option value="vimeo">Vimeo</option>
                            </select>
                            {
                              formik.touched.videoSource && formik.errors.videoSource ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.videoSource}</div>
                              ) : null
                            }
                          </div>
                          <div>
                            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Video Link</label>
                            <div className="mt-1">
                              <input type="text"
                                name="link"
                                value={formik.values.link}
                                onChange={formik.handleChange}
                                id="link"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder={formik.values.videoSource === 'youtube' ? "https://www.youtube.com/watch?v=T-K9eo6L4UE" : "https://vimeo.com/524933864"} />
                            </div>
                            {
                              formik.touched.link && formik.errors.link ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.link}</div>
                              ) : null
                            }
                          </div>

                          <div>
                            <div className="mt-1 flex justify-end">
                              <PrimaryButton disabled={formik.isSubmitting} type="submit">
                                {
                                  isEditing ? 'Update Video' : 'Add Video'
                                }
                              </PrimaryButton>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

    </AdminLayout>
  );
}

export default Show;
