import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";
import { BlogType } from "@/types/blog-type";
import { SpeakerType } from "@/types/speaker-type";

/**
 * Interface representing the properties for the ViewBlogPage component.
 *
 * It defines the necessary data structure required to display a blog page,
 * including the main blog data.
 *
 * @typedef {Object} ViewBlogPageProps
 * @property {BlogType} blog - The blog content and metadata to be rendered on the page.
 */
interface ViewBlogPageProps {
  blog: BlogType;
}

/**
 * Renders a blog page with structured data, metadata, and its associated layout, content, and categories.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.blog - The blog data object containing information about the blog post.
 * @param {string} props.blog.title - The title of the blog post.
 * @param {string} props.blog.image - The image URL associated with the blog post.
 * @param {string} props.blog.keywords - A string of keywords related to the blog post.
 * @param {string} props.blog.excerpt - The short description or summary of the blog post.
 * @param {string} props.blog.content - The full HTML content of the blog post.
 * @param {Date} props.blog.created_at - The publication date of the blog post.
 * @param {Date} props.blog.updated_at - The last updated date of the blog post.
 * @param {Array} [props.blog.categories] - An optional array of category objects associated with the blog post.
 * @param {string} props.blog.categories[].id - The unique identifier of a category.
 * @param {string} props.blog.categories[].name - The name of a category.
 * @param {string} props.blog.categories[].slug - The slug of a category for URL purposes.
 *
 * @return {JSX.Element} - A JSX element representing the blog page layout and content.
 */
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
            {/* <div className={"p-4 rounded-xl bg-[#F2F6FE] lg:w-[90%] "}>
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
            </div> */}
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
