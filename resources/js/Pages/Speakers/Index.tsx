import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head, Link, router} from "@inertiajs/react";
import SpeakerCard from "@/Components/SpeakerCard";
import {useFormik} from "formik";
import Pagination from "@/Components/Pagination";
import {Input} from "@/Components/ui/input";
import {Search} from "lucide-react";
import {SpeakerType} from "@/types/speaker-type";

interface SpeakerDataType {
  data: SpeakerType[],
  links: any,
  meta: any

}

interface IndexProps {
  speakers: SpeakerDataType,
  query: string,
  locations: any[]
}
function Index({speakers, query, locations} : IndexProps) {
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


      <section className="py-12">
        <div className="max-w-7xl mx-auto  sm:px-6   px-6 lg:px-0">

          <div className=" pb-12 w-full lg:w-2/3 mx-auto">
            <form onSubmit={formik.handleSubmit} className={'space-y-4'}>
             <div className={'flex space-x-6 items-center'}>
               <div className="flex-grow relative">
                 <Input name="query" placeholder={'Search'}
                        className={'w-full border rounded-3xl py-3 px-8'} value={formik.values.query} onChange={formik.handleChange} />
                 <Search className={'absolute top-1/2 transform -translate-y-1/2 right-4 h-6 w-6 text-gray-400'}/>
               </div>

             </div>
            </form>
            <div className={'py-4 px-6 flex space-x-3 '}>
              <p className={'text-gray-900 text-sm'}>Popular searches: </p>
             <div className={'text-sm flex space-x-2'}>
               {
                 locations.map(location => (
                   <Link key={location.id}
                         href={route('location.show', {location: location.slug})}
                         className={'text-gray-500 hover:text-gray-900 text-sm hover:bg-gray-50 px-1.2 underline rounded'}>
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
