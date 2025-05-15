import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";
import HomeOurPartners from "@/Components/HomeOurPartners";
import { CategoryType, SpeakerType } from "@/types/speaker-type";
import { GalleryType } from "@/types/media";
import { OpenGraphDataType } from "@/types/open-grap-data";
import { BackgroundGradientAnimation } from "@/Components/ui/background-gradient-animation";
import HomePageHeroSection from "@/Components/HomePageHeroSection";
import HomeFeaturedSpeakers from "@/Components/HomeFeaturedSpeakers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
  ArrowRight,
  Mic,
  Users,
  Briefcase,
  Award,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Globe,
  Target,
} from "lucide-react";
import { Textarea } from "@/Components/ui/textarea";
import { FaqType } from "@/types/faq-type";
import HomeTestimonialsSection from "@/Components/HomeTestimonialsSection";
import { TestimonialType } from "@/types/testimonial-type";
import * as test from "node:test";
import FooterContactForm from "@/Components/FooterContactForm";
import ScrollToTop from "@/Components/ui/scrollToTop";
import InlineNewsLetterForm from "@/Components/InlineNewsLetterForm";
import { BlogType } from "@/types/blog-type";
interface IndexProps {
  blogs: BlogType[];
  speakers: SpeakerType[];
  gallery: GalleryType[];
  faqs: FaqType[];
  topics: CategoryType[];
  categories: CategoryType[];
  testimonials: TestimonialType[];
}

function Index({
  blogs,
  speakers,
  faqs,
  categories,
  topics,
  testimonials,
}: IndexProps) {
  const siteUrl = window.location.href;

  const data = {
    description:
      "The Leading Speakers & MC Corporation in the Middle East - Public Speakers. MCs. Corporate Trainers. One Stop Solution! Get a speaker in 5 minutes",
    title: "MENA Speakers - Official Website",
    url: siteUrl,
    type: "website",
    twitter: "@menaspeakers",
    keywords:
      "MENA Speakers, Speakers, MCs, Corporate Trainers, One Stop Solution",
    image: "https://mena-speakers.com/images/logo-color.png",
  } as OpenGraphDataType;

  return (
    <MainLayout>
      <Head>
        <title>MENA Speakers</title>
        <link rel={"canonical"} href={data.url} />
        <meta name={"description"} content={data.description} />
        <meta name={"keywords"} content={data.keywords} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={data.url} />
        <meta property="og:type" content={data.type} />
        <meta property="og:locale:alternate" content="en-us" />
        <meta property="og:site_name" content="MENA Speakers" />
        <meta property="og:image" content={data.image} />
        <meta property="og:image:url" content={data.image} />
        <meta property="og:image:size" content="300" />
        <meta name="twitter:card" content={data.description} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:site" content={data.twitter} />
      </Head>
      {/* Hero Header*/}
      <HomePageHeroSection />
      <ScrollToTop />
      {/*FEATURED SPEAKERS SECTION */}
      <section className={"py-12 px-6"}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold text-mena-brand">
              Featured Speakers
            </h2>
            <div className="border-b border-[#F15A29] pb-1">
              <Link href={"/speakers"} className="text-[#F15A29] ">
                View All Speakers
              </Link>
            </div>
          </div>
          <div className={"mt-4"}>
            <p className={"text-slate-500"}>
              With a network of 400+ expert speakers and industry professionals,
              we deliver impactful moments that keep your audience educated,
              engaged, and empowered
            </p>
          </div>
          <HomeFeaturedSpeakers speakers={speakers} />
        </div>
      </section>
      {/*ABOUT US SECTION */}
      <section className="px-6 py-16 lg:py-24 overflow-hidden relative bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-3xl lg:text-4xl font-semibold text-mena-brand mb-6">
                  About Us
                </h2>
                <p className="text-slate-600 mb-6">
                  MENA Speakers is the Middle East's leading agency for
                  professional speakers, MCs, and corporate trainers. We provide
                  a one-stop solution for all your event needs—whether you're
                  planning a conference, workshop, or corporate gathering. Book
                  a powerful speaker or MC in just 5 minutes and ensure your
                  audience is inspired, engaged, and empowered.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
                  <a
                    href="https://speakers-mgt.mena-speakers.com"
                    target="_blank"
                    className="py-3 px-4 bg-mena-brand rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                  >
                    <p className="text-center text-white text-sm">
                      Protocol and Speakers Management
                    </p>
                  </a>

                  <a
                    href="https://public-speaking.mena-speakers.com"
                    target="_blank"
                    className="py-3 px-4 bg-mena-brand rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                  >
                    <p className="text-center text-white text-sm">
                      Public Speaking
                    </p>
                  </a>

                  <a
                    href="https://fasttrack.mena-speakers.com"
                    target="_blank"
                    className="py-3 px-4 bg-mena-brand rounded-xl flex items-center justify-center transition-transform hover:scale-105"
                  >
                    <p className="text-center text-white text-sm">
                      Speaker Fast Track
                    </p>
                  </a>
                </div>

                <Link
                  href="/about-us"
                  aria-label="About Us"
                  title="Learn more about us"
                  className="inline-flex items-center text-[#F15A29] group"
                >
                  <span className="border-b border-[#F15A29] pb-1">
                    Learn More
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square lg:aspect-auto lg:h-[500px]">
                <img
                  className="h-full w-full object-cover rounded-3xl"
                  src="/images/home-about-us.jpeg"
                  alt="About MENA Speakers"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mena-brand/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*OUR CLIENTS SECTION */}
      <section className="py-12 lg:py-24 px-6 bg-[#F2F6FE]">
        <HomeOurPartners />
      </section>
      {/*CATEGORIES SECTION  SECTION*/}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-mena-brand">
            Browse by Category
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Find the perfect speaker for your event based on expertise and
            specialization
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-5 lg:gap-0">
            {/* CATEGORIES SECTION */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 max-w-[500px] lg:min-w-[500px]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-mena-brand">
                    Categories
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Find a speaker on current global trends
                  </p>
                </div>
                <Link
                  href={route("categories.index")}
                  className="text-[#F15A29] flex items-center group"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Change grid to 2 columns and restrict card width */}
              <div className="grid grid-cols-2 gap-5 max-w-xs mx-auto">
                {categories.slice(0, 4).map((category, index) => {
                  const getCategoryIcon = () => {
                    const icons = [
                      <Briefcase className="h-8 w-8 text-white" />,
                      <Award className="h-8 w-8 text-white" />,
                      <BookOpen className="h-8 w-8 text-white" />,
                      <Lightbulb className="h-8 w-8 text-white" />,
                      <TrendingUp className="h-8 w-8 text-white" />,
                      <Globe className="h-8 w-8 text-white" />,
                    ];
                    return icons[index % icons.length];
                  };

                  return (
                    <Link
                      key={category.id}
                      href={route("categories.show", category.slug)}
                      className="group"
                    >
                      {/* Limit card width and center */}
                      <div className="relative overflow-hidden rounded-xl aspect-square max-w-[150px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-mena-brand to-mena-brand/70 flex items-center justify-center">
                          {getCategoryIcon()}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                          <span className="text-white text-sm font-medium mb-2">
                            {category.name}
                          </span>
                          <span className="text-xs text-white/80 flex items-center">
                            <Mic className="h-3 w-3 mr-1" />
                            {category.speaker_count || 0} Speakers
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* TOPICS SECTION */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 max-w-[500px] lg:min-w-[500px]">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-mena-brand">
                    Topics
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Find a speaker on a specific topic
                  </p>
                </div>
                <Link
                  href={route("topics.index")}
                  className="text-[#F15A29] flex items-center group"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Change grid to 2 columns and restrict card width */}
              <div className="grid grid-cols-2 gap-5 max-w-xs mx-auto">
                {topics.slice(0, 4).map((topic) => (
                  <Link
                    key={topic.id}
                    href={route("topics.show", topic.slug)}
                    className="group"
                  >
                    {/* Limit card width and center */}
                    <div className="relative overflow-hidden rounded-xl aspect-square max-w-[150px] mx-auto">
                      <img
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={
                          topic.image ? topic.image : "/images/placeholder.webp"
                        }
                        alt={`${topic.name} Speakers`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                        <span className="text-white text-sm font-medium mb-2">
                          {topic.name}
                        </span>
                        <span className="text-xs text-white/80 flex items-center">
                          <Mic className="h-3 w-3 mr-1" />
                          {topic.speaker_count || 0} Speakers
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/*FAQ SECTION*/}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl text-mena-brand font-semibold">FAQ</h3>
          <div className="mt-6 w-full py-6 lg:max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`${faq.id}`}
                  className={"border shadow px-4 rounded-3xl"}
                >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/*TESTIMONIALS SECTION*/}
      {testimonials.length > 0 && (
        <section className="py-12 bg-[#F2F6FE]">
          <HomeTestimonialsSection testimonials={testimonials} />
        </section>
      )}
      {/*RESOURCES SECTION   */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h2 className="text-2xl lg:text-4xl font-semibold text-mena-brand">
              Resources
            </h2>
            <div className="border-b border-[#F15A29] pb-1">
              <Link href={"/blogs"} className="text-[#F15A29] ">
                View All
              </Link>
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
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

            <FooterContactForm />
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-mena-brand font-semibold">
              Newsletter
            </h3>
            <div className="mt-6">
              <p className="text-slate-500">
                Stay ahead with our monthly newsletter! Get the latest trends
                and expert insights straight to your inbox. Unsubscribe anytime
                with the link in our emails.
              </p>
              <InlineNewsLetterForm />
            </div>

            <div className="mena-society mt-6">
              <h3 className="text-2xl text-mena-brand font-semibold">
                MENA Speakers Society
              </h3>
              <p className="text-slate-500 mt-6">
                Get the scoop on masterclasses, public speaking events and
                workshops with MENA Speakers.
              </p>
              <div className="society-link mt-6">
                <a href=" https://chat.whatsapp.com/KvdNjb3XmRqEVLrd9xgZHt">
                  <img
                    className="h-15"
                    src="/images/MSS-07.svg"
                    alt="mena-society"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
