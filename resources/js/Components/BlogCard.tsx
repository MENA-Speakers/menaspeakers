import React from "react";
import { Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";
import { BlogType } from "@/types/blog-type";

interface BlogCardProps {
  blog: BlogType;
}

function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden border">
      <Link
        href={route("blogs.show", blog.slug)}
        aria-label={"Read blog details"}
      >
        <img
          className={"h-60 w-full object-cover"}
          src={blog.image}
          alt={blog.title}
        />
      </Link>
      <div className={"py-4 space-y-4 p-3"}>
        <div className="flex justify-between items-center">
          <p className="text-xs py-1 text-slate-500">{blog.published_at}</p>
          {blog.author && (
            <div className="flex items-center space-x-2">
              {blog.author.image && (
                <img
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
              <p className="text-xs py-1 text-slate-500">
                By {blog.author.name}
              </p>
            </div>
          )}
        </div>
        <Link
          className={
            "text-lg font-semibold hover:text-[#F15A29] transition-colors"
          }
          href={route("blogs.show", blog.slug)}
          aria-label={blog.title}
        >
          {blog.title}
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
