import React from 'react';
import {Input} from "@/Components/ui/input";
import {useFormik} from "formik";
import {router} from "@inertiajs/react";
import {Search} from "lucide-react";

function HomePageHeroSection() {

  const formik = useFormik({
    initialValues: {
      query:  ''
    },
    onSubmit: (values) => {
      if (values.query === '') return
      router.get(route('speakers.index'), values)
    }
  })

  return (
    <div className={'h-[600px] lg:h-screen relative'}>
      <img className={'lg:h-full h-[600px] w-full object-cover'} src="/images/home-hero-bg.webp" alt=""/>
      <div className="absolute bg-gradient-to-br from-black/90 via-slate-900/90 to-zinc-900/70  px-6 inset-0 z-0">
        <div className="w-full lg:h-full flex h-[600px]  items-center justify-center flex-col space-y-8">
          <div className={'space-y-8 py-12'}>
            <h1 className="text-3xl lg:text-6xl text-mena-100 font-bold">
              We are the leading speaker and <br /> MC Bureau in the Middle East
            </h1>
            <div className={'w-full lg:w-[70%] space-y-2 mx-auto'}>
             <div className={'relative w-full'}>
               <Input
                 name={'query'}
                 value={formik.values.query} onChange={formik.handleChange}
                 className={'w-full  rounded-2xl py-3 text-lg px-5'}
                 placeholder={"Search by 'topics', 'speakers', 'categories' etc"}
               />
               <button className={'absolute top-1/2 transform -translate-y-1/2 right-4 '}>
                 <Search size={26} className={'text-slate-500'}/>
               </button>

             </div>
              <p className={'text-white text-xs mx-1'}>
                Popular searches: {' '}
                <span className="underline cursor-pointer">Geopolitics,</span>{' '}
                <span className="underline cursor-pointer">Artificial intelligence, </span>{' '}
                  <span className="underline cursor-pointer">diversity, </span>{' '}{' '}
                    <span className="underline cursor-pointer">future of work,</span>{' '}
                      <span className="underline cursor-pointer">TED talks</span>{' '}
              </p>
            </div>


          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default HomePageHeroSection;
