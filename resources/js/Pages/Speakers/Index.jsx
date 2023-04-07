import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import SpeakerCard from "@/Components/SpeakerCard";

function Index({speakers, query}) {
  return (
    <MainLayout>
      <Head>
        <title>Speakers</title>
      </Head>
      <section className="relative h-[550px]">
        <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-rose-500/80">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
                <h1 className="text-white text-5xl font-bold">Our Speakers</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 py-12 px-6 lg:px-0">


          {/* Display Speakers*/}
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

            {
              speakers.data.map(speaker => (
              <SpeakerCard key={speaker.slug} speaker={speaker}/>
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
