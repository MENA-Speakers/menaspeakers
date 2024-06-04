import React from 'react';
import { Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";

interface BlogCardProps {
  blog: BlogType
}
function BlogCard({ blog } : BlogCardProps) {
  return (
    <div className=" bg-white p-6 shadow-md">
      <Link href={route('blogs.show', blog.slug)} aria-label={'Read blog details'}>
        <div className={'overflow-hidden'}>
          <img
            className={'w-full object-cover h-60 transition duration-300 ease-in-out hover:scale-105'}
            src={blog.image}
            alt={blog.title} loading='lazy'/>
        </div>
      </Link>
      <div className={'py-4 space-y-4'}>
        <Link className={'font-bold'} href={route('blogs.show', blog.slug)} aria-label={blog.title}>{blog.title}</Link>
        <p>
          {truncateText(blog.excerpt, 120)}
        </p>

        <div>
          <Link href={route('blogs.show', blog.slug)} className="text-mena-200 text-sm font-semibold"  aria-label={'Read blog details'}  >
            Read More
          </Link>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;
