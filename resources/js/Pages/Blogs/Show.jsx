import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import truncateText from "@/Utils/truncateText";

function Index({blog}) {

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    url: window.location.href,
    Keywords: blog.keywords,
    datePublished: blog.created_at,
    dateModified: blog.updated_at,
    author: {
      '@type': 'Organization',
      name: 'MENA Speakers',
      url: 'https://menaspeakers.com',
    },
    image: blog.image,
    description: blog.excerpt ? blog.excerpt : truncateText( blog.content, 150 ),
  };

  return (
    <MainLayout>
      <script type='application/ld+json'>{JSON.stringify( blogStructuredData )}</script>
      <Head>
        <title>{blog.title}</title>
        <meta name={'description'} content={blog.excerpt} />
        <meta name={'keywords'} content={blog.keywords} />
      </Head>
      <section className="relative h-[550px]">
        <img src={blog.image} alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">{blog.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">

        <div dangerouslySetInnerHTML={{__html: blog.content}} className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-12 px-6 lg:px-0">

        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
