import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";
import Pagination from "@/Components/Pagination";
import {BlogType} from "@/types/blog-type";

/**
 * Represents the structure of blog data, including paginated information, links, and metadata.
 */
interface blogData {
  data: BlogType[],
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
 * Renders the Blog Index page, including the hero section, blog listing, and pagination.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.blogs - The blog data to be displayed.
 * @param {Array} props.blogs.data - The list of blog posts, including individual blog data.
 * @param {Object} props.blogs.links - Pagination links for navigating between blog pages.
 * @param {Object} props.blogs.meta - Additional metadata for the pagination.
 * @param {string} props.query - The current search query used to filter the blogs.
 * @return {JSX.Element} The JSX layout for the blog index page.
 */
function BlogsPage({blogs, query}: {blogs: blogData, query: string}) {
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

          {/* Pagination */}

          <div className={'mt-6'}>
            <Pagination links={blogs.links} metaLinks={blogs.meta}/>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default BlogsPage;
