import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";
import Pagination from "@/Components/Pagination";
import {BlogType} from "@/types/blog-type";
import {PublicCategoryType} from "@/types/PublicCategoryType";

interface PublicCategoryPageProps {
  categories: PublicCategoryType[],
  query: string
}

function PublicCategoryPage({categories, query}: PublicCategoryPageProps) {
  return (
    <MainLayout>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className="relative h-[550px] -mt-6">
        <img
          aria-label={'Blogs hero image'}
          src="/images/blog-hero-image.jpeg" alt="groupe of mena speakers in front of people at forume event" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
                <h1 className="text-white text-5xl font-bold">Categories</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 px-6 lg:px-0">


          {/* Display Speakers*/}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {
              categories.map(category => (
                <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h2 className="text-sm font-bold text-gray-800">{category.name}</h2>s
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination */}

          {/*<div className={'mt-6'}>*/}
          {/*  <Pagination links={blogs.links} metaLinks={blogs.meta}/>*/}
          {/*</div>*/}
        </div>
      </section>
    </MainLayout>
  );
}

export default PublicCategoryPage;
