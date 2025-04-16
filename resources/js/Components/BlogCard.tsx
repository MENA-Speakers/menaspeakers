import React from "react";
import { Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";

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
        <div className="flex items-center space-x-3">
          {blog.author ? (
            <>
              <Link href={route("speakers.show", blog.author.slug)}>
                <img
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </Link>
              <div>
                <Link
                  href={route("speakers.show", blog.author.slug)}
                  className="text-sm font-medium hover:text-mena-brand"
                >
                  {blog.author.name}
                </Link>
                <p className="text-xs text-slate-500">{blog.published_at}</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-mena-brand flex items-center justify-center">
                <span className="text-white text-sm">MS</span>
              </div>
              <div>
                <p className="text-sm font-medium">MENA Speakers</p>
                <p className="text-xs text-slate-500">{blog.published_at}</p>
              </div>
            </>
          )}
        </div>
        <Link
          className="block font-semibold hover:text-mena-brand"
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
