import React from 'react';
import PrimaryButton from "@/Components/PrimaryButton";
import {Head, Link, router} from "@inertiajs/react";
import {useFormik} from "formik";
import AdminLayout from "@/Layouts/AdminLayout";
import SpeakerCard from "@/Components/Admin/SpeakerCard";
import {Button} from "@/Components/ui/button";
import {Input} from "@/Components/ui/input";
import {SpeakerType} from "@/types/speaker-type";
import Pagination from "@/Components/Pagination";

interface SpeakerData {
  data: SpeakerType[],
  links: {
    first: string,
    last: string,
    prev: string,
    next: string
  },
  meta: {
    current_page: number,
    from: number,
    last_page: number,
    links: {
      url: string,
      label: string,
      active: boolean
    }[],
    path: string,
    per_page: number,
    to: number,
    total: number
  }
}
function Index( {speakers, query} : {speakers: SpeakerData, query: string} ) {


  const formik = useFormik( {
    initialValues: {
      query: query ? query : '',
    },
    onSubmit: values => {
      router.post( route( 'admin.speakers.search' ), values)
    },
  } );

  return (

  <AdminLayout>
    <Head title="Public Profiles" />

    <div className="">
      <div className="sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl text-gray-900">Front page speakers </h2>
          <Link href={route('admin.speakers.create')}>
            <Button className="bg-slate-100 text-gray-900 hover:bg-slate-200">
              Add Speaker
            </Button>
          </Link>
        </div>

        <div className="py-3">
          <form onSubmit={formik.handleSubmit} className="flex w-1/3 space-x-8 mb-8 mt-4">
            <Input type="search" name="query"
                   value={formik.values.query}
                   onChange={formik.handleChange}
                   className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            <Button type="submit">Search</Button>
          </form>
        </div>

        <div className="overflow-hidden sm:rounded-lg">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">

            {
              speakers.data.map( (speaker: SpeakerType, index : number) => (
                <SpeakerCard key={index} speaker={speaker} />
              ))
            }

          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <Pagination links={speakers.links} metaLinks={speakers.meta} />
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
  );
}

export default Index;
