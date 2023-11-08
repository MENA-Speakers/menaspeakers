import React from 'react';
import { Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";

function BlogCard({ blog }) {
  return (
    <div className=" bg-white p-6 shadow-md">
      <div className="flex justify-between pb-2 items-center">
        <span className="gradient-btn py-1 px-2 text-white font-semibold text-sm">
          Latest
        </span>
        <span className={'text-xs text-gray-400'}>
          {blog.published_at}
        </span>
      </div>
      <Link href={route('blogs.show', blog.slug)}>
        <img
          className={'w-full object-cover h-60'}
          src={blog.image}
          alt={blog.title} loading='lazy' />
      </Link>
      <div className={'py-4 space-y-4'}>
        <Link className={'font-bold'} href={route('blogs.show', blog.slug)} aria-label={blog.title}>{blog.title}</Link>
        <p>
          {truncateText(blog.excerpt, 120)}
        </p>

        <div>
          <Link href={route('blogs.show', blog.slug)} className="text-mena-200 text-sm font-semibold"  aria-label={blog.title}  >
            Read More
          </Link>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;
