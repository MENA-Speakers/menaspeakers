import React, {Fragment, useRef} from 'react';
import {useFormik} from "formik";
import axios from "axios";
import {Dialog, Transition} from "@headlessui/react";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";

interface AddVideoLinkDialogProps {
  handleLinkAdded: (link: VideoLinks) => void
  type: 'profile' | 'portfolio' | 'rate-card',
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  id: string
}

type RouteType = 'profile' | 'portfolio' | 'rate-card';

export function AddVideoLinkDialog({handleLinkAdded, type, isOpen, setIsOpen, id}: AddVideoLinkDialogProps) {

  const cancelButtonRef = useRef(null)



  const formik = useFormik( {
    initialValues: {
      link: '',
    },

    onSubmit: values => {

      let route = ''
      if (type === 'profile') {
        route = route('admin.profiles.videos.store', id)
      } else if (type === 'portfolio') {
        route = route('admin.portfolios.videos.store', id)
      } else if (type === 'rate-card') {
        route = route('admin.rate-cards.videos.store', id)
      }

      axios.post( route , values).then(
        response => {
          handleLinkAdded(response.data as VideoLinks)
          formik.setSubmitting(false)
          setIsOpen(false)
          //reset form
          formik.resetForm()
        }

      ).catch(error => {
        console.log(error)
        //set formik errors
        if (error.response.status === 422) {
          formik.setErrors(error.response.data.errors)
        }
        formik.setSubmitting(false)
      })
    },

  } );

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setIsOpen}>
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

        <div className="fixed inset-0  w-screen overflow-y-auto" style={{ zIndex: 1000}}>
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
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">

                <Dialog.Title as="h3" className="text-lg text-center font-medium leading-6 text-gray-900">
                  Add Video Link
                </Dialog.Title>
                <form onSubmit={formik.handleSubmit}
                      className="space-y-8 mx-auto py-8">
                  <div className="">
                    <div>
                      <Label htmlFor="link" className="block text-sm font-medium text-gray-700">Link</Label>
                      <div className="mt-1">
                        <Input type="url"
                               name="link"
                               id="link"
                               value={formik.values.link}
                               onChange={formik.handleChange}
                               className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                               placeholder="Video URL"/>
                      </div>

                      {
                        formik.touched.link && formik.errors.link ? (
                          <div className="text-red-500 text-xs italic">{formik.errors.link}</div>
                        ) : null
                      }
                    </div>

                  </div>


                  <div>
                    <div className="mt-1 flex justify-end">
                      <Button disabled={formik.isSubmitting} type="submit">
                        Add Link
                      </Button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AddVideoLinkDialog;
