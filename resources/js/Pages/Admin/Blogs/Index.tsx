import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, router } from "@inertiajs/react";
import { useFormik } from "formik";
import AdminLayout from "@/Layouts/AdminLayout";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

interface Author {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: Author;
  published_at: string;
}

function Index({ blogs, query }) {
  const formik = useFormik({
    initialValues: {
      query: query ? query : "",
    },
    onSubmit: (values) => {
      router.post(route("admin.blogs.search"), values);
    },
  });

  return (
    <AdminLayout>
      <Head title="Blogs" />

      <div className="py-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <form
            onSubmit={formik.handleSubmit}
            className="flex space-x-8 w-1/2 mb-8 mt-4"
          >
            <Input
              type="search"
              name="query"
              value={formik.values.query}
              onChange={formik.handleChange}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <PrimaryButton disabled={formik.isSubmitting} type="submit">
              Search
            </PrimaryButton>
          </form>

          <div className="py-4 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl text-gray-800">Blogs </h1>
            <Link href={route("admin.blogs.create")}>
              <Button className="bg-slate-100 text-gray-900 hover:bg-slate-200">
                Add Blog
              </Button>
            </Link>
          </div>

          <div className="overflow-hidden sm:rounded-lg">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {blogs.data.map((blog) => (
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href={route("blogs.show", blog.slug)}>
                    <img
                      className="rounded-t-lg h-60 w-full object-cover"
                      src={blog.image}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href={route("blogs.show", blog.slug)}>
                      <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
                        {blog.title}
                      </h5>
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <Link
                      href={route("admin.blogs.delete", blog.slug)}
                      method="post"
                    >
                      <button
                        type="submit"
                        className="text-sm px-3 py-2 text-red-600"
                      >
                        Delete
                      </button>
                    </Link>
                    <a
                      href={route("admin.blogs.edit", blog.slug)}
                      className="text-sm px-3 py-2"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/*<div className="mt-12 px-6 w-full">*/}
            {/*  {{$blogs->links()}}*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Index;
