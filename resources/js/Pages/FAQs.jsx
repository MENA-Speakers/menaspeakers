import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";
import BlogCard from "@/Components/BlogCard";

function FAQs() {
  return (
    <MainLayout>
      <Head>
        <title>FAQs</title>
      </Head>
      <section className="relative h-[550px]">
        <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">FAQs</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0">
        <div className={'max-w-6xl mx-auto'}>

          <h5 className={'mt-6'}><strong>What is&nbsp;</strong>MENA Speakers<strong>&nbsp;Speakers Bureau?</strong></h5>
          <p>Among&nbsp;speakers bureaus, MENA Speakers is a full-spectrum business speakers bureau that works with a wide variety of organizations including corporations, associations, and universities, to serve the needs of event and meeting planners as well as corporate training and education professionals. Our consultants are here to assist you throughout the process of planning and producing your event, and to secure the talent you need to ensure the most dynamic presentations, whether a motivational speaker, keynote speaker, business speaker, celebrity speaker, trainer or executive consultant.</p>

          <h5 className={'mt-6'}><strong>Why Should I Use a Speakers Bureau Like MENA Speakers?</strong></h5>
          <p>For the same reasons you’d utilize a travel consultant, stockbroker or realtor. Hiring a speaker is a considerable investment for many organizations. Our consultants know the marketplace and can make your job easier by bringing you exactly what you need for your event while avoiding the pitfalls. Our experience, and years of forming relationships throughout the industry, can get the most value for your money, and our unique ExpertSelect process ensures that we’ll find the right speaker for your event. &nbsp;Here is an animated video about the process of working with a&nbsp;<a href="https://www.youtube.com/watch?v=TvrkPTgrHlA">speakers bureau</a>.</p>

          <h5 className={'mt-6'}><strong>We Need a Keynote Speaker for Next Week’s Event! Is it Too Late? &nbsp;</strong></h5>
          <p>Not necessarily. We often field last-minute offers and have been known to place (or replace) a speaker at a moment’s notice. Of course, the closer a deadline is for an event, the more likely it is that speaker availability will be a factor.</p>

          <h5 className={'mt-6'}><strong>What Is The Best Time to Secure Our Keynote Speaker?</strong></h5>
          <p>Most companies book their keynote speakers 4-6 months in advance of their event, but celebrities and high-demand speakers often need to be booked even further in advance and the preliminary planning steps often start a year or more before the event date.</p>

          <h5 className={'mt-6'}><strong>Can’t I Just Contact a Speaker Directly?</strong></h5>
          <p>In some cases you can, in others not. Most top-name speakers and entertainers only work through bureaus, and for others, there are often a host of details you’ll have to deal with, including itineraries, travel, scheduling and more. In some cases, it can be a full-time job just to handle the arrangements needed to produce a large-scale event. Our consultants have a history and close relationships with most speakers and are also familiar with their presentations and requirements. We can save you both time and money (and make you a hero) by handling all of the details and taking care of all your talent needs in one place.</p>

          <h5 className={'mt-6'}><strong>Do I have to pay extra for speakers bureau services?</strong></h5>
          <p>The best part is you do not have to pay any fees for speakers bureau services. &nbsp;We partner with the top keynote speakers, who give us a commission for every booking we manage for them. &nbsp;This way, the process is easier for the speaker, and our valuable clients get the best rates.</p>

          <h5 className={'mt-6'}><strong>I’m Trying to Locate a Speaker Who is Not on Your Roster – Can You Book Them?</strong></h5>
          <p>Yes! We have reciprocal arrangements and partner with many agencies and speakers bureaus to book speakers that do not appear on our website. Just let us know if you have someone in particular in mind and we will secure them at the same fee as any other bureau.</p>

          <h5 className={'mt-6'}><strong>Do You Coordinate Travel Arrangements?</strong></h5>
          <p>We can, but most speakers now include travel in their fee and handle their own arrangements. If that is an issue for your organization, just let us know and we’ll be happy to help.</p>

          <h5 className={'mt-6'}><strong>My Boss Just Tasked Me with Finding a Speaker for an Upcoming Conference. I’ve Never Done This Before – What Should I Do?</strong></h5>
          <p>OK, first—relax. No, seriously, relax (and step away from the ledge). First determine your event audience, budget, date, and location. Then, reach out to a speakers bureau and an expert consultant will guide you through the process, from conference call to curtain call (and beyond).&nbsp;We’re professionals, this is what we do. Our mission is to make you the hero, by providing world-class resources and unparalleled service (and even have some fun along the way). So sit back and let us do all the heavy lifting.</p>
          <h5 className={'mt-6'}><strong>Do You Accept Pro-Bono Requests?</strong></h5>
          <p>Generally, no. However, we do evaluate all proposals on a case-by-case basis and will gladly forward any reasonable requests to a speaker. If they accept your invitation, they will contact you directly.</p>

          <h5 className={'mt-6'}><strong>Do you have any resources for event planners?&nbsp;</strong></h5>
          <p>We have resources compiled from our own event planner’s extensive industry experience. Check out our&nbsp;<a href="https://mena-speakers.com/index.php/blog/">blog</a>&nbsp;and&nbsp;<a href="https://mena-speakers.com/index.php/blog/">planning tools</a>&nbsp;for additional information.</p>

          <h5 className={'mt-6'}><strong>Who are the top keynote speakers I should know about?</strong></h5>
          <p>Check out our latest&nbsp;<a href="https://mena-speakers.com/index.php/blog/">blog posts</a>&nbsp;for updates on the top booked keynote speakers, business speakers, and motivational speakers.</p>
          <p className={'mt-3'}><span style={{fontSize: '18px'}}><b>How can I enroll to become a speaker with MENA Speakers?</b></span></p>
          <p>If you are a professional speaker and are seeking MENA Speakers to represent you in the region, please submit the following materials to the attention for review by our selection committee:</p>

          <ul className={'px-4 py-3'}>
         <li>&#9755; Biography with high-resolution headshot</li>
            <li>&#9755; A list of speech topics with descriptions</li>
            <li>&#9755; A recent video of a speech given before a live audience&nbsp;</li>
            <li>&#9755; Testimonials from previous audiences</li>
            <li>&#9755; Standard speaking fee and travel requirements</li>
            <li>&#9755; Book/information or significant achievement if applicable</li>
            <li>&#9755; Number of speeches you have done in the past year</li>
            <li>&#9755; What industry or types of groups you most often speak.</li>
            <li>&#9755; Link for your social accounts&nbsp;</li>
          </ul>


          <p>Due to the high volume of submissions we receive, we cannot respond to questions regarding the status of your submission. We will contact you if we feel your concentration and qualifications match our client needs.&nbsp;</p><p><br/><span style={{fontSize: '22px'}}><b>We would like to promote our event. Are there any marketing materials available?</b></span></p><p>Once your speaker is confirmed, we will send you a topic description, bio, and high res jpeg photo.&nbsp; We ask you to credit the MENA Speakers in your promotions, and, if your event is open to the public, we will help publicize by sharing on our own social media channels, newsletter and also send an email to our network.</p>
          <p><strong>Feel free to contact us at <a href="tel:+971 55 98 32 756">+971 55 98 32 756</a> or <a href="mailto:info@mena-speakers.com">info@mena-speakers.com</a>&nbsp;and we’ll get you started.</strong></p>

      </div>
      </section>
    </MainLayout>
  );
}

export default FAQs;
