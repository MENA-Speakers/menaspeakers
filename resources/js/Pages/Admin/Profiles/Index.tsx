import React from 'react';
import {Head, Link, router} from "@inertiajs/react";
import {useFormik} from "formik";
import AdminLayout from "@/Layouts/AdminLayout";
import SpeakerCard from "@/Components/Admin/SpeakerCard";
import {Button} from "@/Components/ui/button";
import {Input} from "@/Components/ui/input";
import {ProfileType} from "@/types/admin-profiles";
import ProfileCard from "@/Components/Admin/ProfileCard";

interface profileData {
  profiles: ProfileType[],
}

function Index( {profiles, query} : {profiles: profileData, query: string} ) {


  const formik = useFormik( {
    initialValues: {
      query: query ? query : '',
    },
    onSubmit: values => {
      router.post( route( 'admin.profiles.search' ), values)
    },
  } );


  return (

  <AdminLayout>
    <Head title="Public Profiles" />

    <div className="">
      <div className="sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl text-gray-900">Speaker Profiles for proposals</h2>
          <Link href={route('admin.profiles.create')}>
            <Button className="bg-slate-100 text-gray-900 hover:bg-slate-200">
              Add Profile
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
              profiles.map( (profile: ProfileType, index : number) => (
                <ProfileCard key={index} profile={profile} />
              ))
            }

          </div>

          {/*<div className="mt-12 px-6 w-full">*/}
          {/*  {{$profiles->links()}}*/}
          {/*</div>*/}

        </div>
      </div>
    </div>
  </AdminLayout>
  );
}

export default Index;
