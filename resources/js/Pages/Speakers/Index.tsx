import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head, Link, router} from "@inertiajs/react";
import SpeakerCard from "@/Components/SpeakerCard";
import {useFormik} from "formik";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";
import {Input} from "@/Components/ui/input";

function Index({speakers, query, locations}) {
  const formik = useFormik({
    initialValues: {
      query: query ? query : ''
    },
    onSubmit: (values) => {
      router.get(route('speakers.index'), values)
    }
  })


  return (
    <MainLayout>
      <Head>
        <title>Speakers</title>
      </Head>
      <section className="relative h-[550px]">
        <img
          aria-label={'Speakers hero image'}
          src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="groupe of mena speakers in front of people at forume event" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
                <h1 className="text-white text-5xl font-bold">Our Speakers</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8  px-6 lg:px-0">

          <div className=" pb-12 w-full lg:w-1/2">
            <form onSubmit={formik.handleSubmit} className={'space-y-4'}>
             <div className={'flex space-x-6 items-center'}>
               <div className="flex-grow">
                 <Input name="query" placeholder={'Search'} label="Search" className={'w-full'} value={formik.values.query} onChange={formik.handleChange} />
               </div>
               <div>
                 <PrimaryButton type="submit">Search</PrimaryButton>
               </div>
             </div>
            </form>
            <div className={'py-4 '}>
              <h3 className={'text-gray-900'}>Locations</h3>
             <div className={'py-2 text-sm flex space-x-4'}>
               {
                 locations.map(location => (
                   <Link key={location.id}
                         href={route('location.show', {location: location.slug})}
                         className={'text-gray-500 hover:text-gray-900 text-sm border py-1.5 hover:bg-gray-50 px-3 rounded'}>
                     {location.name}
                   </Link>
                 ))
               }
             </div>
            </div>
          </div>


          {/* Display Speakers*/}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

            {
              speakers.data.map(speaker => (
              <SpeakerCard key={speaker.slug} speaker={speaker}/>
              ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <Pagination links={speakers.links} metaLinks={speakers.meta} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
