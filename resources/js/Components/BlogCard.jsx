import React from 'react';
import {Link} from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";

function BlogCard({blog}) {
  return (
    <div className=" bg-white p-6 shadow-md">
      <div className="flex justify-between pb-2 items-center">
                <span className="bg-gradient-to-r from-rose-500 to-pink-500 py-1 px-2 text-white font-semibold text-sm">
                  Latest
                </span>
        <span className={'text-xs text-gray-400'}>
                  January 12, 2021
                </span>
      </div>
      <Link href={route('blogs.show', blog.slug)}>
        <img
          className={'w-full object-cover h-60'}
          src={blog.image}
          alt={'blog.title'}/>
      </Link>
      <div className={'py-4 space-y-4'}>
        <Link className={'font-bold'} href={route('blogs.show', blog.slug)}>{blog.title}</Link>
        <p>
          { truncateText(blog.excerpt, 120)}
        </p>

        <div>
          <Link href={route('blogs.show', blog.slug)} className="text-rose-500 text-sm font-semibold">
            Read More
          </Link>
        </div>
      </div>

    </div>
  );
}

export default BlogCard;
