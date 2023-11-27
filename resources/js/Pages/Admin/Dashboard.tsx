import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, router} from "@inertiajs/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import {XMarkIcon} from "@heroicons/react/24/outline";
import AdminYoutubeVideo from "@/Components/AdminYoutubeVideo";

function Dashboard( props ) {

  const [open, setOpen] = useState( false );
  const [locations, setLocations] = useState( props.locations );


  const formik = useFormik( {
    initialValues: {
      name:  '',
    },

    validationSchema: Yup.object( {
      //Validate youtube name
      name: Yup.string()
        .required( 'Link is required' ),
    } ),

    onSubmit: values => {

      axios.post( route( 'admin.settings.location.store'), values
      ).then( ( response ) => {
        formik.setSubmitting( false );
        setOpen( false)
        formik.resetForm();
        setLocations( response.data );
      } ).catch( ( error ) => {
        //Set formik errors
        if ( error.response.status === 422 ) {
          formik.setErrors( error.response.data.errors );
        }
        formik.setSubmitting( false );
      } );
    },
  } );


  return (
    <AuthenticatedLayout
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>

        </div>
      }
    >
      <Head title="Dashboard "/>

      <div className=" max-w-7xl mx-auto p-12 mt-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Locations</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the locations into filter speakers
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              onClick={() => setOpen( true )}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Location
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Number of Speakers
                  </th>


                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {locations.map((location) => (
                  <tr key={location.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {location.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{location.count}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {location.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
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
                        Location
                      </Dialog.Title>
                      <div className="mt-2 w-ful">
                        <form onSubmit={formik.handleSubmit}
                              className=" max-w-4xl space-y-8 mx-auto py-8 px-8">

                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1">
                              <input type="text"
                                     name="name"
                                     value={formik.values.name}
                                     onChange={formik.handleChange}
                                     id="name"
                                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                     placeholder="United Arab Emirates"/>
                            </div>
                            {
                              formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
                              ) : null
                            }
                          </div>

                          <div>
                            <div className="mt-1 flex justify-end">
                              <PrimaryButton disabled={formik.isSubmitting} type="submit">
                                Add Location
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

    </AuthenticatedLayout>
  );
}

export default Dashboard;
