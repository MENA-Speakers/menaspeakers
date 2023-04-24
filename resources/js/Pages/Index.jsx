import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head, Link} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";
import HomeNewsSection from "@/Components/HomeNewsSection";
import HomeOurPartners from "@/Components/HomeOurPartners";
import HomeCountdownSection from "@/Components/HomeCountdownSection";
import HomeGallerySection from "@/Components/HomeGallerySection";


function Index({blogs, speakers, gallery,news}) {
  return (

    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      {/* Hero Header*/}
      <section className="w-full   relative">
        <div className="w-full h-[600px] lg:h-[800px] ">
          <img className={'w-full h-full object-cover'} src="/images/mena-spearkers-01.webp" alt=""/>
          <div className="absolute inset-0 bg-black/40">
            <div
              className={'w-full lg:max-w-4xl mx-auto px-6 lg:px-0 pt-40 lg:pt-0 h-full flex space-y-8 flex-col items-center justify-center z-20'}>
              <h1 className="text-3xl lg:text-5xl font-semibold text-white text-center">
                LEADING SPEAKERS & MC CORPORATION IN THE MIDDLE EAST
              </h1>
              <p className="text-white lg:text-lg font-semibold  ">Public Speakers. MCs. Corporate Trainers. One Stop
                Solution!
              </p>
              <Link className={'text-white mt-8 gradient-btn mt-6 py-2 px-4'} href={route('pages.contact')}>Get a speaker in 5 minutes</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={'bg-gradient-to-t p-2 from-black to-gray-500'}>

      </section>

      <section className={'py-12 bg-black w-full lg:pb-72'}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" space-y-4 px-6">
            <p className="text-gray-400 font-bold">About MENA Speakers</p>
            <p className="text-4xl font-bold text-gray-200">
              We are the leading speaker and MC Bureau in the Middle East
            </p>
            <div className={'mt-4'}>
              <p className="text-gray-400 text-white text-justify">
                MENA Speakers offers solutions built to succeed. What makes MENA Speakers trustworthy is more than their
                track record. We perpetually strive to provide top notch speakers, raising the bar every day. We
                recognize it is important to keep growing, especially in a field where a great speaker is a key
                ingredient to a successful meeting. MENA Speakers are trained in numerous settings. They are equipped
                with a plethora of abilities and skills designed to take a meeting to the next level. We provide orators
                that can innovate, facilitate, or simply, moderate content. Our speakers are trained for events
                requiring motivational speakers, educators, moderators, keynote speakers, or 1-on-1 meetings.
              </p>
            </div>
          </div>

          <div className={'grid grid-cols-2 px-6 lg:px-12'}>
            <div className={'space-y-4'}>
              <svg className={'w-16 h-16 stroke-1 fill-current text-blue-300'} xmlns="http://www.w3.org/2000/svg"
                   xmlSpace="preserve" viewBox="0 0 512 512">
                <path
                  d="M508.622 1.925c-2.444-1.824-5.335-2.391-8.26-1.533l-161.375 47.5L177.551.392c-.17-.049-.314-.047-.484-.087a9.319 9.319 0 0 0-1.099-.191 9.529 9.529 0 0 0-1.092-.069c-.368 0-.726.027-1.094.069a9.52 9.52 0 0 0-1.109.191c-.172.04-.344.038-.514.087L7.434 48.694C3.321 49.906 0 53.675 0 57.963V502.34c0 3.043 1.934 5.91 4.377 7.737C6.066 511.341 8.345 512 10.411 512c.915 0 1.955-.127 2.852-.391l161.564-47.499 161.531 47.499c.266.079.554.123.825.177.151.031.307.074.46.098a9.78 9.78 0 0 0 1.467.117c.49 0 .981-.042 1.467-.117.153-.024.302-.067.453-.098.271-.054.542-.098.811-.177l163.726-48.302c4.113-1.211 6.434-4.981 6.434-9.269V9.661c-.001-3.041-.935-5.909-3.379-7.736zM164.226 446.811 19.321 489.429V65.189l144.906-42.618v424.24zm164.227-248.534c0 .994-1.078 2.106-1.302 3.327-.453 2.452 1.302 4.837 1.302 6.804v281.021l-144.906-42.618V203.237c12.075 4.106 24.234 7.161 36.745 8.986.472.065 1.194.098 1.656.098 4.717 0 8.974-3.462 9.672-8.268.774-5.279-2.825-10.184-8.099-10.954-12.253-1.783-24.609-4.815-35.807-9.013-1.217-.457-1.752-.644-4.167-.601V22.571l144.906 42.618v133.088zm164.226 248.534-144.906 42.618V216.103c7.245 2.321 14.106 5.37 19.717 9.134 1.651 1.107 3.769 1.637 5.618 1.637 3.113 0 6.295-1.5 8.153-4.279 2.972-4.433 1.354-10.433-3.078-13.406-8.653-5.804-18.335-10.211-30.41-13.198V65.189l144.906-42.618v424.24z"/>
                <path
                  d="M308.84 200.755c-.283-5.33-5-9.42-10.151-9.146-6.047.311-12.349.877-18.736 1.674a234.99 234.99 0 0 1-19.651 1.637c-5.33.212-9.481 4.708-9.264 10.039.208 5.197 4.491 9.272 9.642 9.272.132 0 .264-.004.396-.009a253.1 253.1 0 0 0 21.274-1.768 242.333 242.333 0 0 1 17.339-1.553c5.33-.273 9.424-4.82 9.151-10.146zM418.047 282.232c-1.293-15.143-4.953-28.817-10.887-40.643-2.377-4.759-8.179-6.673-12.962-4.307-4.764 2.393-6.698 8.199-4.302 12.968 4.821 9.623 7.821 20.938 8.906 33.623.425 5.038 4.651 8.839 9.613 8.839a9.658 9.658 0 0 0 9.632-10.48zM104.472 115.774C92.566 97.887 87.425 83.816 87.378 83.681c-1.811-5.02-7.359-7.618-12.359-5.822a9.65 9.65 0 0 0-5.83 12.335c.236.656 5.887 16.283 19.189 36.278a9.673 9.673 0 0 0 8.057 4.312c1.84 0 3.698-.524 5.34-1.618 4.442-2.953 5.65-8.953 2.697-13.392zM155.821 167.581c-10.019-6.594-19.509-14.41-28.208-23.236-3.726-3.801-9.84-3.844-13.66-.104-3.802 3.745-3.84 9.863-.094 13.661 9.642 9.792 20.189 18.48 31.34 25.82a9.622 9.622 0 0 0 5.302 1.59c3.142 0 6.226-1.527 8.076-4.349 2.933-4.458 1.697-10.447-2.756-13.382zM447.07 384.111l19.844-19.846a9.657 9.657 0 0 0 0-13.661 9.656 9.656 0 0 0-13.66 0L433.41 370.45l-19.844-19.846a9.656 9.656 0 0 0-13.66 0 9.657 9.657 0 0 0 0 13.661l19.844 19.846-19.844 19.847a9.657 9.657 0 0 0 0 13.661 9.632 9.632 0 0 0 6.83 2.829 9.63 9.63 0 0 0 6.83-2.829l19.844-19.847 19.844 19.847a9.632 9.632 0 0 0 6.83 2.829 9.63 9.63 0 0 0 6.83-2.829 9.657 9.657 0 0 0 0-13.661l-19.844-19.847z"/>
              </svg>

              <h3 className="text sm font-semibold text-blue-400">
                Where
              </h3>
              <p className="text-white">The Citadel Tower <br />
                Dubai - UAE</p>
            </div>
            <div className={'space-y-4'}>

              <svg className={'w-16 h-16 stroke-1'} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000"
                   viewBox="0 0 24 24">
                <g stroke="#93c5fd">
                  <circle cx="12" cy="12" r="8.5"/>
                  <path strokeLinecap="round" d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"/>
                </g>
              </svg>
              <h3 className="text sm font-semibold text-blue-400">
                When
              </h3>
              <p className="text-gray-100">Monday - Friday <br/> 9 AM - 6 PM</p>
            </div>


          </div>
          <div className={'w-full flex flex-col md:flex-row px-6 lg:px-12'}>
            <div className="pt-12 lg:pt-0">
              <Link href={route('pages.contact')} className="gradient-btn font-semibold py-3 px-4 px-4 text-white">Book
                Our Speakers</Link>
            </div>
            <div className="pt-12 lg:pt-0">
              <Link href={route('speakers.index')}
                    className="underline hover:text-mena-200 font-semibold py-3 px-4 px-4 text-white">View All
                Speakers</Link>
            </div>
          </div>

        </div>
      </section>

      <section className={'lg:-mt-40 mt-12 '}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 px-6">
          <div className="py-12 bg-mena-100 flex flex-col">
            <div className={'w-full px-6 lg:px-20'}>
              <svg className={'w-12 h-12'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                   stroke="#fff" viewBox="0 0 488 488">
                <path
                  d="M305.4 244c0-33.9-27.6-61.4-61.4-61.4s-61.4 27.5-61.4 61.4 27.6 61.4 61.4 61.4 61.4-27.5 61.4-61.4zM244 281.4c-20.6 0-37.4-16.8-37.4-37.4s16.8-37.4 37.4-37.4 37.4 16.8 37.4 37.4-16.8 37.4-37.4 37.4zM155.1 232c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM103.8 244c0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12-12 5.4-12 12zM88.5 244c0-24.4-19.9-44.3-44.3-44.3S0 219.6 0 244s19.9 44.3 44.3 44.3 44.2-19.9 44.2-44.3zm-44.2 20.3c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3 20.3 9.1 20.3 20.3-9.2 20.3-20.3 20.3z"/>
                <circle cx="372.2" cy="244" r="12"/>
                <path
                  d="M332.9 256c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12zM443.7 199.7c-24.4 0-44.3 19.9-44.3 44.3s19.9 44.3 44.3 44.3S488 268.4 488 244s-19.9-44.3-44.3-44.3zm0 64.6c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3S464 232.8 464 244c0 11.2-9.1 20.3-20.3 20.3zM244 320.9c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM244 360.2c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM244 399.5c-24.4 0-44.3 19.9-44.3 44.3S219.6 488 244 488s44.3-19.9 44.3-44.3-19.9-44.2-44.3-44.2zm0 64.5c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3c11.2 0 20.3 9.1 20.3 20.3S255.2 464 244 464zM244 167.1c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z"/>
                <circle cx="244" cy="115.8" r="12"/>
                <path
                  d="M244 88.5c24.4 0 44.3-19.9 44.3-44.3S268.4 0 244 0s-44.3 19.9-44.3 44.3 19.9 44.2 44.3 44.2zm0-64.5c11.2 0 20.3 9.1 20.3 20.3s-9.1 20.3-20.3 20.3-20.3-9.1-20.3-20.3S232.8 24 244 24zM172.7 298.4c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0 4.7-12.3 0-17c-4.8-4.7-12.4-4.7-17 0z"/>
                <circle cx="153.4" cy="334.6" r="12"/>
                <path
                  d="M71.5 353.9c-17.3 17.3-17.3 45.3 0 62.6s45.3 17.3 62.6 0 17.3-45.3 0-62.6c-17.3-17.2-45.4-17.2-62.6 0zm45.6 45.7c-7.9 7.9-20.7 7.9-28.6 0s-7.9-20.7 0-28.6 20.7-7.9 28.6 0c7.9 7.8 7.9 20.7 0 28.6z"/>
                <circle cx="334.6" cy="153.4" r="12"/>
                <circle cx="306.9" cy="181.1" r="12"/>
                <path
                  d="M416.5 134.1c17.3-17.3 17.3-45.3 0-62.6s-45.3-17.3-62.6 0-17.3 45.3 0 62.6 45.4 17.2 62.6 0zm-45.6-45.7c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6-20.7 7.9-28.6 0c-7.9-7.8-7.9-20.7 0-28.6z"/>
                <circle cx="334.6" cy="334.6" r="12"/>
                <path
                  d="M298.4 298.4c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0 4.7-12.3 0-17c-4.7-4.7-12.3-4.7-17 0zM353.9 353.9c-17.3 17.3-17.3 45.3 0 62.6s45.3 17.3 62.6 0 17.3-45.3 0-62.6c-17.2-17.2-45.3-17.2-62.6 0zm45.7 45.7c-7.9 7.9-20.7 7.9-28.6 0s-7.9-20.7 0-28.6 20.7-7.9 28.6 0c7.9 7.8 7.9 20.7 0 28.6z"/>
                <circle cx="181.1" cy="181.1" r="12"/>
                <circle cx="153.4" cy="153.4" r="12"/>
                <path
                  d="M134.1 134.1c17.3-17.3 17.3-45.3 0-62.6s-45.3-17.3-62.6 0-17.3 45.3 0 62.6c17.2 17.2 45.3 17.2 62.6 0zM88.4 88.4c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6-20.7 7.9-28.6 0c-7.9-7.8-7.9-20.7 0-28.6z"/>
              </svg>
            </div>
            <a href="https://mena-speakers.com/profile" className={'p-6 lg:px-20 space-y-4'}>
              <h3 className="text-white text-2xl font-bold">SPEAKERS MANAGEMENT
              </h3>
              <p className={'text-gray-100'}>MENA Speakers provide you with first class speakers Our aim is to
                facilitate the interaction between speaker and different forums and to make sure that the right voice is
                matched to the right audience.
              </p>
            </a>
          </div>
          <div className="py-12 bg-mena-200 flex flex-col">
            <div className={'w-full px-6 lg:px-20'}>
              <svg className={'w-12 h-12'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                   stroke="#fff" viewBox="0 0 488 488">
                <path
                  d="M305.4 244c0-33.9-27.6-61.4-61.4-61.4s-61.4 27.5-61.4 61.4 27.6 61.4 61.4 61.4 61.4-27.5 61.4-61.4zM244 281.4c-20.6 0-37.4-16.8-37.4-37.4s16.8-37.4 37.4-37.4 37.4 16.8 37.4 37.4-16.8 37.4-37.4 37.4zM155.1 232c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM103.8 244c0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12-12 5.4-12 12zM88.5 244c0-24.4-19.9-44.3-44.3-44.3S0 219.6 0 244s19.9 44.3 44.3 44.3 44.2-19.9 44.2-44.3zm-44.2 20.3c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3 20.3 9.1 20.3 20.3-9.2 20.3-20.3 20.3z"/>
                <circle cx="372.2" cy="244" r="12"/>
                <path
                  d="M332.9 256c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12zM443.7 199.7c-24.4 0-44.3 19.9-44.3 44.3s19.9 44.3 44.3 44.3S488 268.4 488 244s-19.9-44.3-44.3-44.3zm0 64.6c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3S464 232.8 464 244c0 11.2-9.1 20.3-20.3 20.3zM244 320.9c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM244 360.2c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM244 399.5c-24.4 0-44.3 19.9-44.3 44.3S219.6 488 244 488s44.3-19.9 44.3-44.3-19.9-44.2-44.3-44.2zm0 64.5c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3c11.2 0 20.3 9.1 20.3 20.3S255.2 464 244 464zM244 167.1c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z"/>
                <circle cx="244" cy="115.8" r="12"/>
                <path
                  d="M244 88.5c24.4 0 44.3-19.9 44.3-44.3S268.4 0 244 0s-44.3 19.9-44.3 44.3 19.9 44.2 44.3 44.2zm0-64.5c11.2 0 20.3 9.1 20.3 20.3s-9.1 20.3-20.3 20.3-20.3-9.1-20.3-20.3S232.8 24 244 24zM172.7 298.4c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0 4.7-12.3 0-17c-4.8-4.7-12.4-4.7-17 0z"/>
                <circle cx="153.4" cy="334.6" r="12"/>
                <path
                  d="M71.5 353.9c-17.3 17.3-17.3 45.3 0 62.6s45.3 17.3 62.6 0 17.3-45.3 0-62.6c-17.3-17.2-45.4-17.2-62.6 0zm45.6 45.7c-7.9 7.9-20.7 7.9-28.6 0s-7.9-20.7 0-28.6 20.7-7.9 28.6 0c7.9 7.8 7.9 20.7 0 28.6z"/>
                <circle cx="334.6" cy="153.4" r="12"/>
                <circle cx="306.9" cy="181.1" r="12"/>
                <path
                  d="M416.5 134.1c17.3-17.3 17.3-45.3 0-62.6s-45.3-17.3-62.6 0-17.3 45.3 0 62.6 45.4 17.2 62.6 0zm-45.6-45.7c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6-20.7 7.9-28.6 0c-7.9-7.8-7.9-20.7 0-28.6z"/>
                <circle cx="334.6" cy="334.6" r="12"/>
                <path
                  d="M298.4 298.4c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0 4.7-12.3 0-17c-4.7-4.7-12.3-4.7-17 0zM353.9 353.9c-17.3 17.3-17.3 45.3 0 62.6s45.3 17.3 62.6 0 17.3-45.3 0-62.6c-17.2-17.2-45.3-17.2-62.6 0zm45.7 45.7c-7.9 7.9-20.7 7.9-28.6 0s-7.9-20.7 0-28.6 20.7-7.9 28.6 0c7.9 7.8 7.9 20.7 0 28.6z"/>
                <circle cx="181.1" cy="181.1" r="12"/>
                <circle cx="153.4" cy="153.4" r="12"/>
                <path
                  d="M134.1 134.1c17.3-17.3 17.3-45.3 0-62.6s-45.3-17.3-62.6 0-17.3 45.3 0 62.6c17.2 17.2 45.3 17.2 62.6 0zM88.4 88.4c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6-20.7 7.9-28.6 0c-7.9-7.8-7.9-20.7 0-28.6z"/>
              </svg>
            </div>
            <a href="https://mena-speakers-5847879.hs-sites.com/public-speaking" className={'p-6 lg:px-20 space-y-4'}>
              <h3 className="text-white text-2xl font-bold">PUBLIC SPEAKING TRAINING </h3>
              <p className={'text-gray-100'}>Small organizations with 100 employees have to bear the same cost as leaders are spending 17 hours a week clarifying previous communications. On the other hand, leaders reap the benefit of effective communication by demonstrating a 47% increase in return on investment.</p>
            </a>
          </div>
          <div className="py-12 bg-mena-300 flex flex-col">
            <div className={'w-full px-6 lg:px-20'}>
              <svg className={'w-12 h-12'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                   stroke="#fff" viewBox="0 0 488 488">
                <path
                  d="M305.4 244c0-33.9-27.6-61.4-61.4-61.4s-61.4 27.5-61.4 61.4 27.6 61.4 61.4 61.4 61.4-27.5 61.4-61.4zM244 281.4c-20.6 0-37.4-16.8-37.4-37.4s16.8-37.4 37.4-37.4 37.4 16.8 37.4 37.4-16.8 37.4-37.4 37.4zM155.1 232c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM103.8 244c0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12-12 5.4-12 12zM88.5 244c0-24.4-19.9-44.3-44.3-44.3S0 219.6 0 244s19.9 44.3 44.3 44.3 44.2-19.9 44.2-44.3zm-44.2 20.3c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3 20.3 9.1 20.3 20.3-9.2 20.3-20.3 20.3z"/>
                <circle cx="372.2" cy="244" r="12"/>
                <path
                  d="M332.9 256c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12zM443.7 199.7c-24.4 0-44.3 19.9-44.3 44.3s19.9 44.3 44.3 44.3S488 268.4 488 244s-19.9-44.3-44.3-44.3zm0 64.6c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3S464 232.8 464 244c0 11.2-9.1 20.3-20.3 20.3zM244 320.9c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM244 360.2c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM244 399.5c-24.4 0-44.3 19.9-44.3 44.3S219.6 488 244 488s44.3-19.9 44.3-44.3-19.9-44.2-44.3-44.2zm0 64.5c-11.2 0-20.3-9.1-20.3-20.3s9.1-20.3 20.3-20.3c11.2 0 20.3 9.1 20.3 20.3S255.2 464 244 464zM244 167.1c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12z"/>
                <circle cx="244" cy="115.8" r="12"/>
                <path
                  d="M244 88.5c24.4 0 44.3-19.9 44.3-44.3S268.4 0 244 0s-44.3 19.9-44.3 44.3 19.9 44.2 44.3 44.2zm0-64.5c11.2 0 20.3 9.1 20.3 20.3s-9.1 20.3-20.3 20.3-20.3-9.1-20.3-20.3S232.8 24 244 24zM172.7 298.4c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0 4.7-12.3 0-17c-4.8-4.7-12.4-4.7-17 0z"/>
                <circle cx="153.4" cy="334.6" r="12"/>
                <path
                  d="M71.5 353.9c-17.3 17.3-17.3 45.3 0 62.6s45.3 17.3 62.6 0 17.3-45.3 0-62.6c-17.3-17.2-45.4-17.2-62.6 0zm45.6 45.7c-7.9 7.9-20.7 7.9-28.6 0s-7.9-20.7 0-28.6 20.7-7.9 28.6 0c7.9 7.8 7.9 20.7 0 28.6z"/>
                <circle cx="334.6" cy="153.4" r="12"/>
                <circle cx="306.9" cy="181.1" r="12"/>
                <path
                  d="M416.5 134.1c17.3-17.3 17.3-45.3 0-62.6s-45.3-17.3-62.6 0-17.3 45.3 0 62.6 45.4 17.2 62.6 0zm-45.6-45.7c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6-20.7 7.9-28.6 0c-7.9-7.8-7.9-20.7 0-28.6z"/>
                <circle cx="334.6" cy="334.6" r="12"/>
                <path
                  d="M298.4 298.4c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0 4.7-12.3 0-17c-4.7-4.7-12.3-4.7-17 0zM353.9 353.9c-17.3 17.3-17.3 45.3 0 62.6s45.3 17.3 62.6 0 17.3-45.3 0-62.6c-17.2-17.2-45.3-17.2-62.6 0zm45.7 45.7c-7.9 7.9-20.7 7.9-28.6 0s-7.9-20.7 0-28.6 20.7-7.9 28.6 0c7.9 7.8 7.9 20.7 0 28.6z"/>
                <circle cx="181.1" cy="181.1" r="12"/>
                <circle cx="153.4" cy="153.4" r="12"/>
                <path
                  d="M134.1 134.1c17.3-17.3 17.3-45.3 0-62.6s-45.3-17.3-62.6 0-17.3 45.3 0 62.6c17.2 17.2 45.3 17.2 62.6 0zM88.4 88.4c7.9-7.9 20.7-7.9 28.6 0s7.9 20.7 0 28.6-20.7 7.9-28.6 0c-7.9-7.8-7.9-20.7 0-28.6z"/>
              </svg>
            </div>
            <a href="https://mena-speakers-5847879.hs-sites.com/speakers-fast-track-programme" className={'p-6 lg:px-20 space-y-4'}>
              <h3 className="text-white text-2xl font-bold">SPEAKER FAST TRACK </h3>
              <p className={'text-gray-100'}>The speaker fast track program helps launch your career as a speaker as well as positions speakers to get more speaking engagements around the world. Clients demand that the speakers’ kit is professional, congruent, and appealing.</p>
            </a>
          </div>
        </div>

      </section>


      {/* Count down Section */}
     <HomeCountdownSection />

      <HomeGallerySection gallery={gallery}/>


      {/*  Our Partners */}
      <HomeOurPartners/>

      {/*  Speaker section */}

      <section className={'py-6 mt-24'}>
        <div className={'max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 px-6 lg:px-0'}>

          {/* Featured Speakers */}
          <div className={'flex flex-col lg:flex-row  lg:space-x-8'}>

            {
              speakers.map((speaker, index) => (
                <div key={speaker.slug} className={'py-12 lg:py-0 w-full lg:w-1/3'}>
                  <div
                    className={` ${index === 0 && 'lg:mt-40'}  ${index === 1 && 'lg:mt-20'} lg:h-96`}>
                    <div className={'shadow-2xl'}>
                      <Link href={route('speakers.show', speaker.slug)}>
                        <img src={speaker.image} alt={speaker.name} className={'w-full object-cover lg:h-96'}/>
                      </Link>
                    </div>
                    <div className=" mt-3">
                      <p className="text-sm font-semibold text-center">{speaker.name}</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
          <div className={'lg:pl-36 pt-36 lg:pt-0 flex flex-col justify-center'}>
            <h3 className="uppercase text-gray-400 text-sm font-semibold">The Best in Growth</h3>
            <div className="lg:w-[90%] py-4 mt-3">
              <p className="text-3xl font-semibold text-gray-900">The Largest Pool of Top Speaker in the MENA Region</p>
            </div>

            <div className={'py-4'}>
              <p className="text-gray-500">We have a roster of 300 top professionals whose sole purpose is to make an event successful and ensure that your audience is getting engaged, educated and empowered.</p>
            </div>
            <div className="py-4">
              <Link href={route('speakers.index')} className="gradient-btn hover:-gradient-btn font-semibold py-3 px-4 px-6 text-white">
                All Speakers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={'bg-gradient-to-r from-mena-100 to-mena-300 py-12 mt-12 lg: mt-24'}>
        <a href="https://g.page/r/CUmLQ8-Do9XOEAI/review" className="max-w-7xl mx-auto px-4 sm px-6 lg px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative">
            <div className="absolute opacity-10 -top-6 -left-4">
              <svg className={'h-16 w-16 -rotate-25'} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff"
                   strokeLinecap="square" aria-labelledby="hornIconTitle" color="#000" viewBox="0 0 24 24">
                <path strokeLinejoin="round"
                      d="M6.5 9H12c2 0 4.333-1.667 7-5v15c-2.667-3.333-5-5-7-5H6.5h0A2.5 2.5 0 0 1 4 11.5h0A2.5 2.5 0 0 1 6.5 9Z"/>
                <path d="m7 14 2 6h4l-2-6zM11 9v5"/>
              </svg>

            </div>
            <div className="pl-4">
              <p className="font-semibold text-white text-4xl">
                1780
              </p>
              <p className={'uppercase text-xs  text-white'}>Speakers</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute opacity-10 -top-6 -left-4">
              <svg className={'h-16 w-16 -rotate-25'} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fill="#fff"
                   stroke="#fff" version="1.0" viewBox="0 0 64 64">
                <path
                  d="M32.001 2.484c.279 0 .463.509.463.509l8.806 18.759 20.729 3.167L47 40.299 50.541 62l-18.54-10.254L13.461 62l3.541-21.701-14.999-15.38 20.729-3.167L31.53 3.009s.192-.525.471-.525m0-2.477c-.775 0-1.48.448-1.811 1.15l-8.815 18.778-19.674 3.006a2.003 2.003 0 0 0-1.13 3.374l14.294 14.657-3.378 20.704a1.996 1.996 0 0 0 .822 1.957 1.99 1.99 0 0 0 2.12.117l17.572-9.719 17.572 9.719a1.991 1.991 0 0 0 2.119-.116c.627-.44.946-1.201.822-1.957l-3.378-20.704L63.43 26.316a2 2 0 0 0-1.13-3.374l-19.674-3.006-8.814-18.779a2.003 2.003 0 0 0-1.811-1.15z"/>
              </svg>
            </div>
            <div className="pl-4">
              <p className="font-semibold text-white text-4xl">
                9.6
              </p>
              <p className={'uppercase text-xs  text-white'}>Rating</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute opacity-20 -top-6 -left-4">
              <svg className={'h-14 w-14 '} xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff"
                   viewBox="0 0 512 512">
                <path
                  d="M501 11H11v390.9h155.7l-53 87.7 17.8 10.9 59.6-98.6h54.5v66.2h20.9v-66.2h54l59.9 99.1 17.8-10.9-53.3-88.2H501V11zm-19.8 370.9H31.9V32h449.3v349.9z"/>
                <path
                  d="M175.7 191.7H86.1v141.8h89.7V191.7zm-20.8 120.9h-48V211.7h48v100.9zM300.8 94h-89.7v239.6h89.7V94zM280 312.6h-48V115h48v197.6zM425.9 147.6h-89.7v186h89.7v-186zm-20.8 165h-48v-144h48v144z"/>
              </svg>

            </div>
            <div className="pl-4">
              <p className="font-semibold text-white text-4xl">
                100+
              </p>
              <p className={'uppercase text-xs  text-white'}>Workshops</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute opacity-10 -top-6 -left-4">
              <svg className={'h-14 w-14 stroke-1 rotate-25'} xmlns="http://www.w3.org/2000/svg" xml:space="preserve"
                   fill="#fff" stroke="#fff" viewBox="0 0 23 32"><g fill="#808184"><path d="M11.5 4.727c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm0 12c-3.032 0-5.5-2.467-5.5-5.5s2.468-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.468 5.5-5.5 5.5z"/><path
                d="M21.617 7.226c.22-.921.116-1.727-.306-2.349-.419-.617-1.121-1.008-2.045-1.145-.277-1.862-1.624-2.797-3.493-2.35C14.794-.255 13.108-.602 11.5.531c-1.609-1.133-3.293-.786-4.273.852-1.873-.447-3.217.488-3.494 2.35-.923.137-1.626.528-2.045 1.144-.421.622-.525 1.428-.305 2.349C.578 7.707.072 8.343-.09 9.084c-.168.769.047 1.598.622 2.416-.575.818-.79 1.647-.622 2.416.162.741.668 1.377 1.473 1.858-.22.921-.116 1.727.306 2.349.419.617 1.121 1.008 2.045 1.145.276 1.862 1.621 2.796 3.493 2.35.982 1.638 2.666 1.985 4.273.851.638.449 1.275.677 1.899.677.95 0 1.782-.539 2.374-1.528 1.869.446 3.216-.488 3.493-2.35.924-.137 1.626-.528 2.045-1.145.422-.622.525-1.427.306-2.349.805-.481 1.311-1.117 1.473-1.858.168-.769-.047-1.598-.622-2.416.575-.818.79-1.647.622-2.416-.162-.741-.668-1.377-1.473-1.858zm-.164 4.591c.554.675.781 1.327.659 1.886-.148.681-.791 1.123-1.304 1.373a.5.5 0 0 0-.257.605c.18.547.313 1.318-.068 1.88-.379.558-1.135.717-1.702.751a.5.5 0 0 0-.469.468c-.055.889-.384 1.949-1.642 1.949-.299 0-.632-.06-.99-.177a.496.496 0 0 0-.605.256c-.298.61-.83 1.337-1.676 1.337-.483 0-1.03-.239-1.582-.692a.499.499 0 0 0-.634 0c-.552.453-1.099.691-1.582.692-.846 0-1.378-.727-1.676-1.337a.498.498 0 0 0-.605-.256 3.196 3.196 0 0 1-.99.177c-1.258 0-1.587-1.06-1.642-1.949a.5.5 0 0 0-.469-.468c-.567-.035-1.323-.193-1.702-.751-.382-.562-.248-1.333-.068-1.88a.5.5 0 0 0-.257-.605c-.513-.25-1.155-.692-1.304-1.373-.122-.559.105-1.211.659-1.886a.5.5 0 0 0 0-.634C.993 10.508.766 9.856.888 9.297c.148-.681.791-1.123 1.304-1.373a.5.5 0 0 0 .257-.605c-.18-.547-.313-1.318.068-1.88.379-.558 1.135-.717 1.702-.751a.5.5 0 0 0 .469-.468c.054-.89.383-1.949 1.641-1.949.299 0 .632.06.99.177a.501.501 0 0 0 .605-.256c.298-.61.83-1.337 1.676-1.337.483 0 1.03.239 1.582.692a.502.502 0 0 0 .635 0c.552-.453 1.099-.692 1.582-.692.846 0 1.378.727 1.676 1.337a.5.5 0 0 0 .605.256c.358-.118.691-.177.99-.177 1.258 0 1.587 1.06 1.642 1.949a.5.5 0 0 0 .469.468c.567.035 1.323.193 1.702.751.382.562.248 1.333.068 1.88a.5.5 0 0 0 .257.605c.513.25 1.155.692 1.304 1.373.122.559-.105 1.211-.659 1.886a.5.5 0 0 0 0 .634z"/><path
                d="M5 23a.5.5 0 0 0-.5.5v6.946c0 .571.324 1.088.86 1.35a1.661 1.661 0 0 0 1.768-.179l4.337-3.39 4.378 3.422c.299.234.658.354 1.023.354.252 0 .517-.058.757-.175.536-.261.878-.779.878-1.35V23.5a.5.5 0 0 0-1 0v6.977c0 .272-.224.406-.317.452a.655.655 0 0 1-.704-.068l-1.98-1.558V25.57a.5.5 0 0 0-1 0v2.952l-1.712-1.324a.5.5 0 0 0-.617 0L9.5 28.501V25.57a.5.5 0 0 0-1 0v3.713l-1.985 1.546a.67.67 0 0 1-.713.068c-.093-.045-.302-.18-.302-.451V23.5A.5.5 0 0 0 5 23zM14.297 8.355l-3.458 4.598-2.15-2.206a.5.5 0 0 0-.717.698l2.558 2.513c.094.098.223.042.358.042h.032c.146 0 .279.027.367-.089l3.809-5.01a.467.467 0 0 0-.099-.672c-.219-.167-.534-.096-.7.126z"/></g></svg>

            </div>
            <div className="pl-4">
              <p className="font-semibold text-white text-4xl">
                600+
              </p>
              <p className={'uppercase text-xs  text-white'}>Success Stories</p>
            </div>
          </div>
        </a>
      </section>

      {/* Our News Section */}

      <HomeNewsSection/>


      {/*  Blog section */}


      <section className={'py-12 mt-20'}>
        <div className={'max-w-7xl mx-auto  '}>
          <div className={'flex items-center flex-col w-full text center py-12'}>
            <h3 className="font-bold text-gray-900 text-5xl">Latest from blog</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-0 mt-8">
            {
              blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog}/>
              ))
            }
          </div>

          <div className="flex items-center justify-center mt-12 pb-8 py-4">
            <Link href={route('blogs.index')} className="bg-gray-900 hover:bg-gray-700 py-2.5 px-8 text-white">View all post</Link>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}

export default Index;
