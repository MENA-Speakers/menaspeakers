import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head, Link} from "@inertiajs/react";

function Show({speaker}) {
  return (
    <MainLayout>
      <Head>
        <title>{speaker.name}</title>
      </Head>

      <section className="relative h-[350px]">
        <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/80">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-gray-200 text-5xl font-bold">{ speaker.name }</h1>
            </div>
          </div>
        </div>
      </section>


      <section className={'p-6 lg:p-12'}>
        <div className="max-7xl mx-auto px-4 sm lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-6 lg:w-[90%]">
              <div className="col-span-2 lg:p-6">
                <div className={'lg:w-[80%] space-y-6  flex flex-col items-center justify-center'}>
                  <img className={'w-full h-96 object-cover'} src={speaker.image} alt={speaker.name}/>

                {/*  Book Speaker*/}
                  <Link href={route('pages.contact')} className="bg-gradient-to-r from-pink-500 to-rose-500  font-semibold py-3 px-4 py-2 px-4 text-white w-full">
                    Book Speaker
                  </Link>
                </div>

              </div>

              <div className="col-span-2 lg:col-span-4 p-8">
                <div dangerouslySetInnerHTML={{__html: speaker.bio}}>

                </div>
              </div>

            </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Show;
