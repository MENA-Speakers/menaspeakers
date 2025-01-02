import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";
import { BlogType } from "@/types/blog-type";

interface ViewBlogPageProps {
  blog: BlogType;
}

function ViewBlogPage({ blog }: ViewBlogPageProps) {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    url: window.location.href,
    Keywords: blog.keywords,
    datePublished: blog.created_at,
    dateModified: blog.updated_at,
    author: {
      "@type": "Organization",
      name: "MENA Speakers",
      url: "https://menaspeakers.com",
    },
    image: blog.image,
    description: blog.excerpt ? blog.excerpt : truncateText(blog.content, 150),
  };

  return (
    <MainLayout>
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>
      <Head>
        <title>{blog.title}</title>
        <meta name={"description"} content={blog.excerpt} />
        <meta name={"keywords"} content={blog.keywords} />
      </Head>
      <section className="relative -mt-4 h-[550px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">{blog.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6">
          <div className={"col-span-1 lg:col-span-2 space-y-6 lg:pr-12"}>
            {/*CATEGORIES SECTION */}
            {blog.categories && (
              <div className={"p-4 rounded-xl bg-[#F2F6FE] lg:w-[90%] "}>
                <h2 className="text-2xl pb-4 text-mena-brand">CATEGORY</h2>

                <div className={"flex flex-wrap items-center gap-4"}>
                  {blog.categories.map((category) => (
                    <Link
                      href={route("categories.show", category.slug)}
                      key={category.id}
                      className={
                        "px-4 py-1.5 rounded-3xl bg-mena-brand border border-mena-brand text-white"
                      }
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {/*TOPICS SECTION */}
            <div className={"p-4 rounded-xl bg-[#F2F6FE] lg:w-[90%] "}>
              <h2 className="text-2xl pb-4 text-mena-brand">TOPICS</h2>

              <div className={"flex flex-wrap items-center gap-4"}>
                <div
                  className={
                    "px-4 py-1.5 rounded-3xl border border-mena-brand text-mena-brand"
                  }
                >
                  Politics
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="px-6 lg  py-12  lg:px-0"
            ></div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default ViewBlogPage;
