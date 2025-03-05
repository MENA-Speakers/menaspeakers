import React from 'react';
import {Head, Link, router} from "@inertiajs/react";
import {useFormik} from "formik";
import AdminLayout from "@/Layouts/AdminLayout";
import SpeakerCard from "@/Components/Admin/SpeakerCard";
import {Button} from "@/Components/ui/button";
import {Input} from "@/Components/ui/input";
import {SpeakerType} from "@/types/speaker-type";
import Pagination from "@/Components/Pagination";

/**
 * The SpeakerData interface represents the data structure for speaker information, which includes
 * a list of speakers, pagination links, and metadata about the paginated results.
 *
 * It consists of the following properties:
 *
 * @property {SpeakerType[]} data - An array of speaker objects of type SpeakerType.
 * @property {Object} links - An object containing URLs for pagination navigation.
 * @property {string} links.first - URL for the first page of the results.
 * @property {string} links.last - URL for the last page of the results.
 * @property {string} links.prev - URL for the previous page of the results.
 * @property {string} links.next - URL for the next page of the results.
 * @property {Object} meta - Metadata about the paginated results.
 * @property {number} meta.current_page - The current page number.
 * @property {number} meta.from - The starting index of the current page.
 * @property {number} meta.last_page - The last page number in the pagination.
 * @property {Object[]} meta.links - An array of link objects for pagination.
 * @property {string} meta.links.url - The URL associated with a pagination link.
 * @property {string} meta.links.label - The label describing the pagination link (e.g., page number).
 * @property {boolean} meta.links.active - Indicates whether the link is for the current page.
 * @property {string} meta.path - The base path used for generating pagination URLs.
 * @property {number} meta.per_page - The number of results shown per page.
 * @property {number} meta.to - The ending index of the current page.
 * @property {number} meta.total - The total number of results available.
 */
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

/**
 * Renders the Index component, which displays a list of speakers and provides search functionality.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.speakers - Data representing the list of speakers, including pagination details.
 * @param {string} props.query - Initial query string for the search input.
 * @return {JSX.Element} The rendered Index component.
 */
function Index({speakers, query}: { speakers: SpeakerData, query: string }) {

  // Initialize formik for handling the search form
  const formik = useFormik({
    initialValues: {
      query: query ? query : '',
    },
    onSubmit: values => {
      router.post(route('admin.speakers.search'), values)
    },
  });

  return (
    <AdminLayout>
      <Head title="Public Profiles"/>

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
                speakers.data.map((speaker: SpeakerType, index: number) => (
                  <SpeakerCard key={index} speaker={speaker}/>
                ))
              }

            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <Pagination links={speakers.links} metaLinks={speakers.meta}/>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Index;
