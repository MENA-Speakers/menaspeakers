import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import AdminYoutubeVideo from "@/Components/AdminYoutubeVideo";
import truncateText from "@/Utils/truncateText";


function Show({ speaker }) {

  const speakerStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: speaker.name,
    url: window.location.href,
    image: speaker.image,
    jobTitle: speaker.title,
    description: speaker.excerpt ? speaker.excerpt : truncateText(speaker.bio, 150),
  };

  const siteUrl = window.location.href;

  return (
    <MainLayout>
      <script type='application/ld+json'>{JSON.stringify(speakerStructuredData)}</script>
      <Head>
        <title>{speaker.name}</title>
        <meta name={'description'} content={speaker.excerpt ? speaker.excerpt : truncateText(speaker.bio, 150)} />
        <meta name={'keywords'} content={speaker.keywords} />
        <meta property="og:title" content={speaker.name} />
        <meta property="og:description" content={speaker.excerpt ? speaker.excerpt : truncateText(speaker.bio, 150)} />
        <meta property="og:image" content={speaker.image} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="profile" />
      </Head>

      <section className="relative h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          alt="groupe of mena speakers in front of people at forume event" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  sm px-6 lg px-8">
              <h1 className="text-gray-200 text-5xl font-bold">{speaker.name}</h1>
            </div>
          </div>
        </div>
      </section>


      <section className={'p-6 lg:p-12'}>
        <div className="max-7xl mx-auto px-4 sm lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 lg:w-[90%]">
            <div className="col-span-2 lg:p-6">
              <div className={'lg:w-[80%] space-y-6  flex flex-col items-center justify-center'}>
                <img className={'w-full h-96 object-cover'} src={speaker.image} alt={speaker.name} />

                {/*  Book Speaker*/}
                <Link href={route('pages.contact')}
                  className="gradient-btn font-semibold py-3 px-4 py-2 px-4 text-white w-full">
                  Book Speaker
                </Link>
              </div>

            </div>

            <div className="col-span-2 lg:col-span-4 p-8">
              <div dangerouslySetInnerHTML={{ __html: speaker.bio }}>

              </div>
            </div>

          </div>
          {/* Videos */}

          {speaker.videos?.length > 0 && (
            <div className="mt-12 px-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Videos</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-6">
                {
                  speaker.videos.map(video => (
                    <AdminYoutubeVideo key={video.id} video={video} />
                  ))
                }
              </div>

            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

export default Show;
