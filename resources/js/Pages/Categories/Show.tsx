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

interface ShowCategoryProps {
  speakers: SpeakerType[],
  query: string,
  locations: any[]
}
function ShowCategory({speakers, query, locations} : ShowCategoryProps) {
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


          {
            !speakers.length && (
              <div className={' min-h-[600px] flex items-center justify-center flex-col space-y-8'}>
                <div className={'flex items-center justify-center space-y-3 flex-col'}>
                  <h2 className={'text-2xl font-bold text-gray-800'}>No speakers found</h2>
                  <p className={'text-gray-500'}>Try browsing other <Link href={route('categories.index')} className={'underline font-semibold text-mena-300'}> Categories</Link></p>
                </div>

                <div>

                </div>

              </div>
            )
          }

          {/* Display Speakers*/}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

            {
              speakers.map(speaker => (
                <SpeakerCard key={speaker.slug} speaker={speaker}/>
              ))}
          </div>


        </div>
      </section>
    </MainLayout>
  );
}

export default ShowCategory;
