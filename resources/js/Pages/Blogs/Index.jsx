import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";

function Index({blogs, query}) {
  return (
    <MainLayout>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className="relative h-[550px]">
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="groupe of mena speakers in front of people at forume event" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
                <h1 className="text-white text-5xl font-bold">Our Blog</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 px-6 lg:px-0">


          {/* Display Speakers*/}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

            {
              blogs.data.map(blog => (
              <BlogCard key={blog.slug} blog={blog}/>
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
