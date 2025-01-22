import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, router } from "@inertiajs/react";
import SpeakerCard from "@/Components/SpeakerCard";
import { useFormik } from "formik";
import Pagination from "@/Components/Pagination";
import { Input } from "@/Components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { CategoryType, SpeakerType } from "@/types/speaker-type";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import Select from "react-select";

interface SpeakerDataType {
  data: SpeakerType[];
  links: any;
  meta: any;
}

interface IndexProps {
  speakers: SpeakerDataType;
  query: string;
  locations: any[];
  topics: CategoryType[];
  categories: CategoryType[];
  selectedCategory: CategoryType;
  selectedTopic: CategoryType;
  selectedLocation: any;
}

function Index({
  speakers,
  query,
  locations,
  topics,
  categories,
  selectedCategory,
  selectedTopic,
  selectedLocation,
}: IndexProps) {
  const [showFilters, setShowFilters] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      query: query ? query : "",
      location: "",
      topic: "",
      category: "",
    },
    onSubmit: (values) => {
      router.get(route("speakers.index"), values);
    },
  });

  return (
    <MainLayout>
      <section className="py-12">
        <div className="max-w-7xl mx-auto  sm:px-6   px-6 lg:px-0">
          <form onSubmit={formik.handleSubmit}>
            <div className=" pb-12 w-full lg:w-2/3 mx-auto">
              <div className={"space-y-4"}>
                <div className={"flex space-x-6 items-center"}>
                  <div className="flex-grow relative">
                    <Input
                      name="query"
                      placeholder={"Search"}
                      className={"w-full border rounded-3xl py-3 px-8"}
                      value={formik.values.query}
                      onChange={formik.handleChange}
                    />
                    <button
                      className={
                        "absolute top-1/2 transform -translate-y-1/2 right-4"
                      }
                      type={"submit"}
                    >
                      <Search className={" h-6 w-6 text-mena-100"} />
                    </button>
                  </div>
                </div>
              </div>
              <div className={"py-4 px-6 flex space-x-3 "}>
                <p className={"text-gray-900 text-sm"}>Popular searches: </p>
                <div className={"text-sm flex space-x-2"}>
                  {/*{*/}
                  {/*  locations.map(location => (*/}
                  {/*    <Link key={location.id}*/}
                  {/*          href={route('location.show', {location: location.slug})}*/}
                  {/*          className={'text-gray-500 hover:text-gray-900 text-sm hover:bg-gray-50 px-1.2 underline rounded'}>*/}
                  {/*      {location.name}*/}
                  {/*    </Link>*/}
                  {/*  ))*/}
                  {/*}*/}
                </div>
              </div>
            </div>

            <div
              className={`flex items-center  gap-6 ${
                query ? "justify-between" : "justify-end"
              }`}
            >
              {query && (
                <p>
                  {speakers.data.length} results found for{" "}
                  <span className="font-semibold">"{query}"</span>
                </p>
              )}

              <Button
                type={"button"}
                onClick={() => setShowFilters(!showFilters)}
                className={`rounded-2xl border border-mena-brand group
              ${
                showFilters
                  ? "bg-white text-mena-brand hover:bg-mena-brand hover:text-white group-hover:bg-mena-brand group-hover:text-white"
                  : "bg-mena-brand text-white hover:bg-white hover:text-mena-brand group-hover:bg-white group-hover:mena-brand"
              }`}
              >
                Filter by
                <SlidersHorizontal
                  className={`h-6 w-6 ml-2 stroke-1 ${
                    showFilters
                      ? "group-hover:text-white"
                      : "group-hover:text-mena-brand"
                  }`}
                />
              </Button>
            </div>

            {showFilters && (
              <div
                className={
                  "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 pt-6"
                }
              >
                <div>
                  <Label
                    htmlFor="location"
                    className="block text-sm sr-only font-medium text-gray-700"
                  >
                    Categories
                  </Label>
                  <Select
                    defaultValue={selectedCategory}
                    onChange={(e) => formik.setFieldValue("category", e)}
                    name="category"
                    placeholder={"Select Category"}
                    options={categories}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="block text-sm sr-only font-medium text-gray-700"
                  >
                    Categories
                  </Label>
                  <Select
                    defaultValue={selectedTopic}
                    onChange={(e) => formik.setFieldValue("topic", e)}
                    name="topic"
                    options={topics}
                    placeholder={"Select Topic"}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="location"
                    className="block text-sm sr-only font-medium text-gray-700"
                  >
                    Categories
                  </Label>
                  <Select
                    defaultValue={selectedLocation}
                    onChange={(e) => formik.setFieldValue("location", e)}
                    name="location"
                    options={locations}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
            )}
          </form>
          {/* Display Speakers*/}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {speakers.data.map((speaker) => (
              <SpeakerCard key={speaker.slug} speaker={speaker} />
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
