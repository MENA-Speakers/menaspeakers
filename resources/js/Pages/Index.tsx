import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head, Link} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";
import HomeOurPartners from "@/Components/HomeOurPartners";
import {CategoryType, SpeakerType} from "@/types/speaker-type";
import {GalleryType} from "@/types/media";
import {OpenGraphDataType} from "@/types/open-grap-data";
import {BackgroundGradientAnimation} from "@/Components/ui/background-gradient-animation";
import HomePageHeroSection from "@/Components/HomePageHeroSection";
import HomeFeaturedSpeakers from "@/Components/HomeFeaturedSpeakers";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {ArrowRight} from "lucide-react";
import {Textarea} from "@/Components/ui/textarea";
import {FaqType} from "@/types/faq-type";
import HomeTestimonialsSection from "@/Components/HomeTestimonialsSection";
import {TestimonialType} from "@/types/testimonial-type";
import * as test from "node:test";

interface IndexProps {
  blogs: BlogType[],
  speakers: SpeakerType[],
  gallery: GalleryType[],
  faqs: FaqType[]
  topics: CategoryType[],
  categories: CategoryType[],
  testimonials: TestimonialType[]
}

function Index({blogs, speakers, faqs, categories, topics, testimonials}: IndexProps) {

  const siteUrl = window.location.href;

  const data = {
    description: 'The Leading Speakers & MC Corporation in the Middle East - Public Speakers. MCs. Corporate Trainers. One Stop Solution! Get a speaker in 5 minutes',
    title: 'MENA Speakers - Official Website',
    url: siteUrl,
    type: 'website',
    twitter: '@menaspeakers',
    keywords: "MENA Speakers, Speakers, MCs, Corporate Trainers, One Stop Solution",
    image: "https://mena-speakers.com/images/mena-speakers-logo.webp",
  } as OpenGraphDataType;

  return (

    <MainLayout>
      <Head>
        <title>MENA Speakers</title>
        <link rel={'canonical'} href={data.url}/>
        <meta name={'description'} content={data.description}/>
        <meta name={'keywords'} content={data.keywords}/>
        <meta property="og:title" content={data.title}/>
        <meta property="og:description" content={data.description}/>
        <meta property="og:image" content={data.image}/>
        <meta property="og:url" content={data.url}/>
        <meta property="og:type" content={data.type}/>
        <meta property="og:locale:alternate" content="en-us"/>
        <meta property="og:site_name" content="MENA Speakers"/>
        <meta property="og:image" content={data.image}/>
        <meta property="og:image:url" content={data.image}/>
        <meta property="og:image:size" content="300"/>

        <meta name="twitter:card" content={data.description}/>
        <meta name="twitter:title" content={data.title}/>
        <meta name="twitter:site" content={data.twitter}/>

      </Head>
      {/* Hero Header*/}
      <HomePageHeroSection/>

      {/*FEATURED SPEAKERS SECTION */}

      <section className={'py-12 px-6'}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold text-mena-brand">Featured Speakers</h2>
            <div className="border-b border-[#F15A29] pb-1">
              <Link href={'/speakers'} className="text-[#F15A29] ">View All Speakers</Link>
            </div>
          </div>
          <div className={'mt-4'}>
            <p className={'text-slate-500'}>
              We have a roster of 300 top professionals whose sole purpose is to make an event successful and ensure
              that your audience is getting engaged, educated and empowered.
            </p>
          </div>
          <HomeFeaturedSpeakers speakers={speakers}/>
        </div>
      </section>


      {/*ABOUT US SECTION */}

      <section className="px-6 py-6 lg:py-24 overflow-hidden lg:h-[700px] lg:relative">
        <div className="lg:absolute lg:inset-0 lg:p-6 z-10">
          <div className="max-w-7xl mx-auto h-full z-10 flex items-center">
            <div className="w-full lg:w-2/3 lg:pr-12">
              <div className={'p-4 lg:p-12 w-full bg-slate-200 rounded-3xl '}>
                <h2 className={'text-3xl lg:text-5xl font-semibold text-mena-brand'}>About Us</h2>
                <div className={'mt-6'}>
                  <p className={'text-slate-500'}>
                    MENA Speakers is the leading speakers and MC corporation in the Middle East. We provide public
                    speakers, MCs, and corporate trainers. We are a one-stop solution for all your event needs. Get a
                    speaker in 5 minutes.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <Link href={route('pages.contact')}  className={'py-3 px-4 col-span-1 bg-mena-brand rounded-xl flex items-center justify-center'}>
                      <p className="text-center text-white">
                        Protocol and speakers management
                      </p>
                    </Link>

                    <a href={'https://menaspeakersfasttrack.bitrix24.site'} target={'_blank'} className={'py-3 px-4 col-span-1 bg-mena-brand rounded-xl flex items-center justify-center'}>
                      <p className="text-center text-white">
                        Public Speaking
                      </p>
                    </a>

                    <a href={'https://publicspeaking.bitrix24.site'} target={'_black'} className={'py-3 px-4 col-span-1 bg-mena-brand rounded-xl flex items-center justify-center'}>
                      <p className="text-center text-white">
                        Speaker Fast track
                      </p>
                    </a>

                  </div>

                  <div className="mt-6 ">
                 <span className={'border-b pb-1 border-[#F15A29]'}>
                 <Link href={'/about-us'} aria-label={'About Us'} title={'Learn more about us'}
                       className="mt-6 text-[#F15A29]">
                  Learn More
                </Link>
                 </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-0 absolute bottom-0 top-0 right-0 w-[70%]">
          <img className={'z-0 hidden lg:block h-full w-full object-cover'} src="/images/home-about-us.webp"
               alt="about mena speakers"/>
        </div>

      </section>


      {/*CATEGORIES SECTION  SECTION*/}

      <section className="py-12 mt-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <h2 className={'text-mena-brand text-2xl font-semibold lg:text-4xl'}>Browse category</h2>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-12">
            {/*CATEGORIES SECTION */}
            <div className="w-full py-4 lg:w-1/2 flex flex-col space-y-6">
              <div className="flex justify-between items-end">
                <div className={' space-y-1 '}>
                  <h3 className="text-xl text-mena-brand">
                    Categories
                  </h3>
                  <p>
                    Find a speaker on current global trends
                  </p>
                </div>
                <div>
                  <Link href={route('categories.index')} className="text-[#F15A29] ">View All Categories</Link>
                </div>
              </div>

              <div className={'flex gap-6'}>
                {
                  categories.map(category => (
                    <div key={category.id} className={'w-full lg:w-1/2 flex flex-col'}>
                      <Link href={route('categories.show', {category: category.slug})}>
                        <img className={'h-40 object-cover w-full rounded-xl'}
                             src={category.image ? category.image : '/images/placeholder.webp'}
                             alt={`${category.name} Speakers`}/>
                        </Link>
                        <Link href={route('categories.show', category.slug)} className="text-sm mt-1">
                          {
                            category.name
                          }
                        </Link>
                    </div>
                  ))
                }
              </div>

            </div>


            {/*TOPICS SECTION */}
            <div className="w-full py-4 lg:w-1/2 flex flex-col space-y-6">
              <div className="flex justify-between items-end">
                <div className={' space-y-1 '}>
                  <h3 className="text-xl text-mena-brand">
                    Topics
                  </h3>
                  <p>
                    Find a speaker on a specific topic
                  </p>
                </div>
                <div>
                  <Link href={route('topics.index')} className="text-[#F15A29] ">View All Topics</Link>
                </div>
              </div>

              <div className={'grid grid-cols-2 lg:grid-cols-4 gap-6'}>

                {
                  topics.map(topic => (
                    <div key={topic.id} className={' flex flex-col'}>
                      <Link href={route('topics.show', {topic: topic.slug})}>
                        <img className={'h-20 object-cover w-full rounded-xl'}
                             src={topic.image ? topic.image : '/images/placeholder.webp'}
                             alt={`${topic.name} Speakers`}/>
                      </Link>
                      <Link href={route('topics.show', topic.slug)} className="text-sm mt-1">
                        {
                          topic.name
                        }
                      </Link>
                    </div>
                  ))
                }


              </div>

            </div>

          </div>
        </div>
      </section>


      {/*OUR CLIENTS SECTION */}

      <section className="py-12 lg:py-24 px-6 bg-[#F2F6FE]">
        <HomeOurPartners/>

      </section>

      {/*FAQ SECTION*/}

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl text-mena-brand font-semibold">
          FAQ
          </h3>
          <div className="mt-6 w-full py-6 lg:max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {
                faqs.map(faq => (
                  <AccordionItem key={faq.id} value="item-1" className={'border shadow px-4 rounded-3xl'}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))
              }

            </Accordion>
          </div>
        </div>
      </section>

      {/*TESTIMONIALS SECTION*/}
      {
        testimonials.length > 0 && (
          <section className="py-12 px-6 bg-[#F2F6FE]">
            <HomeTestimonialsSection testimonials={testimonials}/>
          </section>
        )
      }

      {/*RESOURCES SECTION   */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold text-mena-brand">Resources</h2>
            <div className="border-b border-[#F15A29] pb-1">
              <Link href={'/blogs'} className="text-[#F15A29] ">View All</Link>
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">

            {
              blogs.map(blog => (
                <BlogCard key={blog.slug} blog={blog}/>
              ))
            }

          </div>
        </div>
      </section>


      {/*CONTACT SECTION   */}

      <section className="py-12 px-6 bg-[#F2F6FE]">
        <div className="max-w-7xl mx-auto flex gap-12 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-mena-brand font-semibold">
              Contact Us
            </h3>
            <div className="mt-6">
              <p className="text-slate-500">
                Fill the form so that our team can reach out to you
              </p>
            </div>

            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6'}>
              <Input type={'text'} placeholder={'Name'} className={'rounded-lg py-3 px-4 col-span-2 lg:col-span-1'}/>
              <Input type={'text'} placeholder={'Company name'} className={'rounded-lg py-3 px-4 col-span-2 lg:col-span-1'}/>
              <Input type={'email'} placeholder={'Email'} className={'rounded-lg py-3 px-4 col-span-2 lg:col-span-1'}/>
              <Input type={'text'} placeholder={'Phone number'} className={'rounded-lg py-3 px-4 col-span-2 lg:col-span-1'}/>
              {/*<Input type={'text'} placeholder={'Phone number'} className={'rounded-lg py-3 px-4'}/>*/}
              <Textarea placeholder={'Message'} className={'rounded-lg py-3 px-4 col-span-2'}/>
              <Button className={'bg-mena-brand text-white py-3 px-4 rounded-lg col-span-2'}>
                Submit
              </Button>
            </div>
          </div>


          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-mena-brand font-semibold">
              Newsletter
            </h3>
            <div className="mt-6">
              <p className="text-slate-500">
                The world is constantly changing. We monitor trends and keep you up to date monthly with the latest and
                most topical subjects from our leading speakers. To get the latest information as it comes in, please
                sign up for our monthly newsletter. You may unsubscribe at any time using the link at the end of all of
                our emails.
              </p>
            </div>

            <div className={'mt-6'}>
              <div className="relative">
                <Input type={'email'} placeholder={'Email'} className={'rounded-lg py-3 px-4 '}/>
                <Button
                  className={'bg-mena-brand text-white rounded-l-none  rounded-r-lg absolute right-0 bottom-0 top-0'}>
                  <ArrowRight size={24} className={'text-white'}/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
