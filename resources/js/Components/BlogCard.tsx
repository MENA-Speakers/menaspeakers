import React from 'react';
import { Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";

interface BlogCardProps {
  blog: BlogType
}
function BlogCard({ blog } : BlogCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden border">
      <Link href={route('blogs.show', blog.slug)} aria-label={'Read blog details'}>
        <img className={'h-60 w-full object-cover'}
             src={blog.image}
             alt={blog.title}/>
      </Link>
      <div className={'py-4 space-y-4 p-3'}>
        <p className="text-xs py-1 text-slate-500">
          {
            blog.published_at
          }
        </p>
        <Link className={''} href={route('blogs.show', blog.slug)} aria-label={blog.title}>{blog.title}</Link>

      </div>

    </div>
  );
}

export default BlogCard;
