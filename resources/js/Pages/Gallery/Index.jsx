import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

function Index({gallery}) {



  return (
    <MainLayout>
      <Head>
        <title>Gallery</title>
      </Head>
      <section className="relative h-[350px]">
        <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/80">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">Gallery</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 pb-12  px-6 lg:px-0">


          {/* Display Speakers*/}
          {
            gallery.length > 0 &&
            <div className="mt-4">
              <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
              >
                <Masonry gutter="0.5rem">
                  {gallery.map((image, index) => (
                    <img key={index} src={image.url} alt=""/>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          }
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
