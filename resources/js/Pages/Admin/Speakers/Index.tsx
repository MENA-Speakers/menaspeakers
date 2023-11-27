import React from 'react';
import PrimaryButton from "@/Components/PrimaryButton";
import {Head, Link, router} from "@inertiajs/react";
import {useFormik} from "formik";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Index( {speakers, query} ) {

  const formik = useFormik( {
    initialValues: {
      query: query ? query : '',
    },
    onSubmit: values => {
      router.post( route( 'admin.speakers.search' ), values)
    },
  } );

  return (

  <AuthenticatedLayout
    header={
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">Speakers</h2>
      <Link href={ route( 'admin.speakers.create' ) } className="bg-gray-600 hover:bg-gray-800 text-white py-1 px-4 rounded">
        Add Speaker
      </Link>
    </div>
  }
  >
    <Head title="Speakers" />

    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form onSubmit={formik.handleSubmit} className="flex space-x-8 mb-8 mt-4">
          <input type="search" name="query"
                 value={formik.values.query}
                  onChange={formik.handleChange}
                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
          <PrimaryButton type="submit">Search</PrimaryButton>
        </form>

        <div className="overflow-hidden sm:rounded-lg">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

            {
              speakers.data.map(speaker => (
                <div
                  className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href={route('admin.speakers.show', speaker.slug)}>
                    <img className="rounded-t-lg h-60 w-full object-cover" src={ speaker.image }
                         alt="" loading='lazy'/>
                  </a>
                  <div className="p-5">
                    <a href={ route('speakers.show', speaker.slug) }>
                      <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">{speaker.name}</h5>
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <Link href={ route('admin.speakers.delete', speaker.slug) } method="post">
                      <button type="submit" className="text-sm px-3 py-2 text-red-600">Delete</button>
                    </Link>
                    <Link href={ route('admin.speakers.videos', speaker.slug ) } className="text-sm px-3 py-2 text-lime-600">Videos</Link>
                    <Link href={ route('admin.speakers.edit', speaker.slug ) } className="text-sm px-3 py-2">Edit</Link>
                  </div>
                </div>
              ))
            }

          </div>

          {/*<div className="mt-12 px-6 w-full">*/}
          {/*  {{$speakers->links()}}*/}
          {/*</div>*/}

        </div>
      </div>
    </div>
  </AuthenticatedLayout>
  );
}

export default Index;
