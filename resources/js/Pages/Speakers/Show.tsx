import React from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head, Link, router} from "@inertiajs/react";
import AdminYoutubeVideo from "@/Components/AdminYoutubeVideo";
import truncateText from "@/Utils/truncateText";
import posthog from "posthog-js";
import {Button} from "@/Components/ui/button";
import {Share} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";

interface ShowSpeakerProps {
  speaker: {
    name: string,
    title: string,
    image: string,
    excerpt: string,
    bio: string,
    keywords: string,
    videos: any[]
  }

}

function Show({ speaker }: ShowSpeakerProps) {

  const speakerStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: speaker.name,
    url: window.location.href,
    image: speaker.image,
    jobTitle: speaker.title,
    description: speaker.excerpt ? speaker.excerpt : truncateText(speaker.bio, 150),
  };

  posthog.capture('Speaker viewed', { property: [
    { key: 'name', value: speaker.name },
    { key: 'title', value: speaker.title },
    { key: 'image', value: speaker.image },
    ] })

  const siteUrl = window.location.href;

  const bookSpeaker = () => {
    posthog.capture('trying', { property: [
      { key: 'name', value: speaker.name },
      { key: 'title', value: speaker.title },
      { key: 'image', value: speaker.image },
      ]})

    router.visit(route('pages.contact'));
  }

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



      <section className={'p-6 lg:p-12'}>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center gap-6 my-6">
            <div>
              <h1 className="text-4xl font-semibold text-mena-brand">
                {speaker.name}
              </h1>
              <div className="flex items-center gap-2">
                <svg className={'mr-2'} width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5847 0.507324C15.4613 0.507324 14.3311 0.966309 13.5238 1.7478C13.804 4.00073 14.5651 5.43892 15.66 6.35132C16.7464 7.25674 18.2029 7.66382 19.9447 7.73535C20.6005 6.95068 20.9792 5.92456 20.9792 4.90332C20.9792 3.75747 20.5032 2.60532 19.6929 1.79512C18.8826 0.984863 17.7305 0.507324 16.5847 0.507324ZM12.86 2.57637C12.4299 3.27187 12.1886 4.08936 12.1886 4.90332C12.1886 6.04917 12.6662 7.20132 13.4764 8.01152C14.2867 8.82178 15.4388 9.29937 16.5847 9.29937C17.4968 9.29937 18.4129 8.99683 19.1574 8.46475C17.6168 8.3085 16.2459 7.85635 15.1595 6.95107C14.023 6.00395 13.2283 4.57607 12.86 2.57642L12.86 2.57637ZM11.5035 5.88301L8.35559 9.97383C8.4971 10.9309 8.86624 11.6877 9.4344 12.2291C10.0053 12.7731 10.7876 13.1137 11.8072 13.1874L15.6798 9.99985C14.6447 9.81304 13.671 9.31089 12.9241 8.56396C12.1952 7.83511 11.7006 6.88984 11.5034 5.88296L11.5035 5.88301ZM12.242 8.90566H12.2435C12.2522 8.90537 12.2608 8.90537 12.2695 8.90566C12.3449 8.90615 12.4186 8.92845 12.4816 8.96989C12.5446 9.01132 12.5943 9.07012 12.6247 9.13918C12.655 9.20823 12.6647 9.28459 12.6526 9.35903C12.6405 9.43348 12.607 9.50282 12.5564 9.55869L10.8809 11.4522C10.8472 11.4915 10.806 11.5237 10.7597 11.5468C10.7135 11.57 10.6631 11.5838 10.6114 11.5874C10.5598 11.5909 10.508 11.5842 10.459 11.5676C10.4099 11.5509 10.3647 11.5247 10.3259 11.4905C10.2871 11.4562 10.2555 11.4146 10.2329 11.368C10.2103 11.3215 10.1972 11.2709 10.1943 11.2192C10.1915 11.1675 10.1989 11.1158 10.2162 11.067C10.2334 11.0182 10.2602 10.9734 10.295 10.935L11.9704 9.04145C12.0044 9.00185 12.0459 8.96943 12.0925 8.94612C12.1391 8.9228 12.19 8.90902 12.242 8.90566ZM7.73001 10.7871L2.62288 17.4231C2.79314 18.0739 2.98059 18.4458 3.23323 18.6941C3.47884 18.9357 3.83802 19.1072 4.38377 19.3L10.9908 13.8587C10.1574 13.6824 9.44807 13.3214 8.89578 12.7952C8.34178 12.2674 7.95232 11.583 7.73001 10.7871ZM2.27962 18.7156C1.8343 18.9784 1.43147 19.4031 1.15042 19.9073C0.678934 20.7528 0.587918 21.7254 1.04055 22.3716C1.36599 22.5834 1.55647 22.6065 1.71653 22.5837C1.80413 22.5712 1.89319 22.5372 1.99114 22.4922C1.83587 22.0247 1.68352 21.4702 1.86907 20.8655C2.01702 20.3836 2.37312 19.9356 3.01507 19.5228C2.8974 19.4421 2.78711 19.3512 2.68548 19.2512C2.5284 19.0967 2.39544 18.9201 2.27957 18.7155L2.27962 18.7156Z"
                    fill="#F15A29"/>
                </svg>

                <p className="mt-2">
                  Performance coach,Psychologist, Author and Keynote speaker
                </p>
              </div>
            </div>

            <div className={'flex gap-6 items-center justify-center'}>
              <div className={'flex items-center'}>
                <Share size={20} className={'mr-2 text-[#F15A29]'}/>
                <p className={'border-b pb-1 border-[#F15A29]'}>
                  <span className={'text-[#F15A29]'}>
                    Share
                  </span>
                </p>
              </div>
              <Button className="font-semibold text-white bg-mena-brand py-2.5 rounded-2xl">
                Book Speaker
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:py-12 lg:grid-cols-6">
            <div className="col-span-2 lg:pr-12 space-y-8 ">
              <div className={' space-y-6  flex flex-col '}>
                <img className={'w-full lg:w-[90%] rounded-3xl h-80 object-cover'} src={speaker.image}
                     alt={speaker.name}/>
              </div>

              {/*TITLE SECTION */}
              <div className={'p-4 rounded-xl bg-[#F2F6FE] lg:w-[90%] '}>
                <h2 className="text-xl pb-4 text-mena-brand">
                  Aston’s key note titles
                </h2>


                <div className={'flex flex-col space-y-3'}>
                  <div className={'flex items-center mt-4'}>
                    <svg className={'mr-2'} width="18" height="19" viewBox="0 0 18 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.6025 0.543945C12.7038 0.543945 11.7997 0.911133 11.1538 1.53633C11.378 3.33867 11.9868 4.48922 12.8628 5.21914C13.7319 5.94348 14.8971 6.26914 16.2905 6.32637C16.8152 5.69863 17.1181 4.87773 17.1181 4.06074C17.1181 3.14406 16.7373 2.22234 16.0891 1.57418C15.4409 0.925977 14.5192 0.543945 13.6025 0.543945ZM10.6228 2.19918C10.2787 2.75559 10.0856 3.40957 10.0856 4.06074C10.0856 4.97742 10.4678 5.89914 11.1159 6.54731C11.7642 7.19551 12.6858 7.57758 13.6026 7.57758C14.3322 7.57758 15.0651 7.33555 15.6606 6.90988C14.4282 6.78488 13.3315 6.42316 12.4624 5.69895C11.5531 4.94125 10.9174 3.79895 10.6228 2.19922L10.6228 2.19918ZM9.5376 4.84449L7.01924 8.11715C7.13244 8.88277 7.42776 9.48824 7.88229 9.92133C8.33901 10.3566 8.96486 10.6291 9.78049 10.688L12.8786 8.13797C12.0505 7.98852 11.2716 7.5868 10.674 6.98926C10.091 6.40617 9.69526 5.64996 9.53752 4.84445L9.5376 4.84449ZM10.1284 7.26262H10.1296C10.1365 7.26239 10.1434 7.26239 10.1504 7.26262C10.2107 7.263 10.2696 7.28085 10.3201 7.314C10.3705 7.34715 10.4102 7.39418 10.4345 7.44943C10.4588 7.50467 10.4665 7.56576 10.4568 7.62531C10.4471 7.68487 10.4204 7.74034 10.3799 7.78504L9.03951 9.29988C9.01252 9.33128 8.97956 9.35701 8.94255 9.37557C8.90554 9.39412 8.86521 9.40515 8.8239 9.40799C8.78259 9.41084 8.74113 9.40545 8.70193 9.39214C8.66272 9.37883 8.62654 9.35787 8.5955 9.33047C8.56446 9.30307 8.53917 9.26977 8.5211 9.23252C8.50303 9.19527 8.49254 9.15479 8.49024 9.11345C8.48794 9.07211 8.49387 9.03073 8.5077 8.9917C8.52152 8.95267 8.54296 8.91677 8.57076 8.88609L9.91111 7.37125C9.93825 7.33956 9.97145 7.31363 10.0088 7.29498C10.0461 7.27633 10.0868 7.2653 10.1284 7.26262ZM6.51877 8.76777L2.43307 14.0766C2.56928 14.5972 2.71924 14.8947 2.92135 15.0934C3.11783 15.2867 3.40518 15.4239 3.84178 15.5781L9.1274 11.225C8.46072 11.084 7.89322 10.7952 7.45139 10.3743C7.00819 9.95199 6.69662 9.40445 6.51877 8.76777ZM2.15846 15.1105C1.80221 15.3208 1.47994 15.6605 1.2551 16.0639C0.877912 16.7404 0.8051 17.5184 1.16721 18.0354C1.42756 18.2048 1.57994 18.2233 1.70799 18.2051C1.77807 18.1951 1.84932 18.1678 1.92768 18.1318C1.80346 17.7578 1.68158 17.3143 1.83002 16.8305C1.94838 16.445 2.23326 16.0866 2.74682 15.7563C2.65269 15.6918 2.56445 15.6191 2.48315 15.539C2.35748 15.4155 2.25112 15.2742 2.15842 15.1105L2.15846 15.1105Z"
                        fill="#F15A29"/>
                    </svg>

                    <p>
                      Book title or Ted talk title
                    </p>
                  </div>

                  <div className={'flex items-center mt-4'}>
                    <svg className={'mr-2'} width="18" height="19" viewBox="0 0 18 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.6025 0.543945C12.7038 0.543945 11.7997 0.911133 11.1538 1.53633C11.378 3.33867 11.9868 4.48922 12.8628 5.21914C13.7319 5.94348 14.8971 6.26914 16.2905 6.32637C16.8152 5.69863 17.1181 4.87773 17.1181 4.06074C17.1181 3.14406 16.7373 2.22234 16.0891 1.57418C15.4409 0.925977 14.5192 0.543945 13.6025 0.543945ZM10.6228 2.19918C10.2787 2.75559 10.0856 3.40957 10.0856 4.06074C10.0856 4.97742 10.4678 5.89914 11.1159 6.54731C11.7642 7.19551 12.6858 7.57758 13.6026 7.57758C14.3322 7.57758 15.0651 7.33555 15.6606 6.90988C14.4282 6.78488 13.3315 6.42316 12.4624 5.69895C11.5531 4.94125 10.9174 3.79895 10.6228 2.19922L10.6228 2.19918ZM9.5376 4.84449L7.01924 8.11715C7.13244 8.88277 7.42776 9.48824 7.88229 9.92133C8.33901 10.3566 8.96486 10.6291 9.78049 10.688L12.8786 8.13797C12.0505 7.98852 11.2716 7.5868 10.674 6.98926C10.091 6.40617 9.69526 5.64996 9.53752 4.84445L9.5376 4.84449ZM10.1284 7.26262H10.1296C10.1365 7.26239 10.1434 7.26239 10.1504 7.26262C10.2107 7.263 10.2696 7.28085 10.3201 7.314C10.3705 7.34715 10.4102 7.39418 10.4345 7.44943C10.4588 7.50467 10.4665 7.56576 10.4568 7.62531C10.4471 7.68487 10.4204 7.74034 10.3799 7.78504L9.03951 9.29988C9.01252 9.33128 8.97956 9.35701 8.94255 9.37557C8.90554 9.39412 8.86521 9.40515 8.8239 9.40799C8.78259 9.41084 8.74113 9.40545 8.70193 9.39214C8.66272 9.37883 8.62654 9.35787 8.5955 9.33047C8.56446 9.30307 8.53917 9.26977 8.5211 9.23252C8.50303 9.19527 8.49254 9.15479 8.49024 9.11345C8.48794 9.07211 8.49387 9.03073 8.5077 8.9917C8.52152 8.95267 8.54296 8.91677 8.57076 8.88609L9.91111 7.37125C9.93825 7.33956 9.97145 7.31363 10.0088 7.29498C10.0461 7.27633 10.0868 7.2653 10.1284 7.26262ZM6.51877 8.76777L2.43307 14.0766C2.56928 14.5972 2.71924 14.8947 2.92135 15.0934C3.11783 15.2867 3.40518 15.4239 3.84178 15.5781L9.1274 11.225C8.46072 11.084 7.89322 10.7952 7.45139 10.3743C7.00819 9.95199 6.69662 9.40445 6.51877 8.76777ZM2.15846 15.1105C1.80221 15.3208 1.47994 15.6605 1.2551 16.0639C0.877912 16.7404 0.8051 17.5184 1.16721 18.0354C1.42756 18.2048 1.57994 18.2233 1.70799 18.2051C1.77807 18.1951 1.84932 18.1678 1.92768 18.1318C1.80346 17.7578 1.68158 17.3143 1.83002 16.8305C1.94838 16.445 2.23326 16.0866 2.74682 15.7563C2.65269 15.6918 2.56445 15.6191 2.48315 15.539C2.35748 15.4155 2.25112 15.2742 2.15842 15.1105L2.15846 15.1105Z"
                        fill="#F15A29"/>
                    </svg>

                    <p>
                      Book title or Ted talk title
                    </p>
                  </div>

                  <div className={'flex items-center mt-4'}>
                    <svg className={'mr-2'} width="18" height="19" viewBox="0 0 18 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.6025 0.543945C12.7038 0.543945 11.7997 0.911133 11.1538 1.53633C11.378 3.33867 11.9868 4.48922 12.8628 5.21914C13.7319 5.94348 14.8971 6.26914 16.2905 6.32637C16.8152 5.69863 17.1181 4.87773 17.1181 4.06074C17.1181 3.14406 16.7373 2.22234 16.0891 1.57418C15.4409 0.925977 14.5192 0.543945 13.6025 0.543945ZM10.6228 2.19918C10.2787 2.75559 10.0856 3.40957 10.0856 4.06074C10.0856 4.97742 10.4678 5.89914 11.1159 6.54731C11.7642 7.19551 12.6858 7.57758 13.6026 7.57758C14.3322 7.57758 15.0651 7.33555 15.6606 6.90988C14.4282 6.78488 13.3315 6.42316 12.4624 5.69895C11.5531 4.94125 10.9174 3.79895 10.6228 2.19922L10.6228 2.19918ZM9.5376 4.84449L7.01924 8.11715C7.13244 8.88277 7.42776 9.48824 7.88229 9.92133C8.33901 10.3566 8.96486 10.6291 9.78049 10.688L12.8786 8.13797C12.0505 7.98852 11.2716 7.5868 10.674 6.98926C10.091 6.40617 9.69526 5.64996 9.53752 4.84445L9.5376 4.84449ZM10.1284 7.26262H10.1296C10.1365 7.26239 10.1434 7.26239 10.1504 7.26262C10.2107 7.263 10.2696 7.28085 10.3201 7.314C10.3705 7.34715 10.4102 7.39418 10.4345 7.44943C10.4588 7.50467 10.4665 7.56576 10.4568 7.62531C10.4471 7.68487 10.4204 7.74034 10.3799 7.78504L9.03951 9.29988C9.01252 9.33128 8.97956 9.35701 8.94255 9.37557C8.90554 9.39412 8.86521 9.40515 8.8239 9.40799C8.78259 9.41084 8.74113 9.40545 8.70193 9.39214C8.66272 9.37883 8.62654 9.35787 8.5955 9.33047C8.56446 9.30307 8.53917 9.26977 8.5211 9.23252C8.50303 9.19527 8.49254 9.15479 8.49024 9.11345C8.48794 9.07211 8.49387 9.03073 8.5077 8.9917C8.52152 8.95267 8.54296 8.91677 8.57076 8.88609L9.91111 7.37125C9.93825 7.33956 9.97145 7.31363 10.0088 7.29498C10.0461 7.27633 10.0868 7.2653 10.1284 7.26262ZM6.51877 8.76777L2.43307 14.0766C2.56928 14.5972 2.71924 14.8947 2.92135 15.0934C3.11783 15.2867 3.40518 15.4239 3.84178 15.5781L9.1274 11.225C8.46072 11.084 7.89322 10.7952 7.45139 10.3743C7.00819 9.95199 6.69662 9.40445 6.51877 8.76777ZM2.15846 15.1105C1.80221 15.3208 1.47994 15.6605 1.2551 16.0639C0.877912 16.7404 0.8051 17.5184 1.16721 18.0354C1.42756 18.2048 1.57994 18.2233 1.70799 18.2051C1.77807 18.1951 1.84932 18.1678 1.92768 18.1318C1.80346 17.7578 1.68158 17.3143 1.83002 16.8305C1.94838 16.445 2.23326 16.0866 2.74682 15.7563C2.65269 15.6918 2.56445 15.6191 2.48315 15.539C2.35748 15.4155 2.25112 15.2742 2.15842 15.1105L2.15846 15.1105Z"
                        fill="#F15A29"/>
                    </svg>

                    <p>
                      Book title or Ted talk title
                    </p>
                  </div>

                  <div className={'flex items-center mt-4'}>
                    <svg className={'mr-2'} width="18" height="19" viewBox="0 0 18 19" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.6025 0.543945C12.7038 0.543945 11.7997 0.911133 11.1538 1.53633C11.378 3.33867 11.9868 4.48922 12.8628 5.21914C13.7319 5.94348 14.8971 6.26914 16.2905 6.32637C16.8152 5.69863 17.1181 4.87773 17.1181 4.06074C17.1181 3.14406 16.7373 2.22234 16.0891 1.57418C15.4409 0.925977 14.5192 0.543945 13.6025 0.543945ZM10.6228 2.19918C10.2787 2.75559 10.0856 3.40957 10.0856 4.06074C10.0856 4.97742 10.4678 5.89914 11.1159 6.54731C11.7642 7.19551 12.6858 7.57758 13.6026 7.57758C14.3322 7.57758 15.0651 7.33555 15.6606 6.90988C14.4282 6.78488 13.3315 6.42316 12.4624 5.69895C11.5531 4.94125 10.9174 3.79895 10.6228 2.19922L10.6228 2.19918ZM9.5376 4.84449L7.01924 8.11715C7.13244 8.88277 7.42776 9.48824 7.88229 9.92133C8.33901 10.3566 8.96486 10.6291 9.78049 10.688L12.8786 8.13797C12.0505 7.98852 11.2716 7.5868 10.674 6.98926C10.091 6.40617 9.69526 5.64996 9.53752 4.84445L9.5376 4.84449ZM10.1284 7.26262H10.1296C10.1365 7.26239 10.1434 7.26239 10.1504 7.26262C10.2107 7.263 10.2696 7.28085 10.3201 7.314C10.3705 7.34715 10.4102 7.39418 10.4345 7.44943C10.4588 7.50467 10.4665 7.56576 10.4568 7.62531C10.4471 7.68487 10.4204 7.74034 10.3799 7.78504L9.03951 9.29988C9.01252 9.33128 8.97956 9.35701 8.94255 9.37557C8.90554 9.39412 8.86521 9.40515 8.8239 9.40799C8.78259 9.41084 8.74113 9.40545 8.70193 9.39214C8.66272 9.37883 8.62654 9.35787 8.5955 9.33047C8.56446 9.30307 8.53917 9.26977 8.5211 9.23252C8.50303 9.19527 8.49254 9.15479 8.49024 9.11345C8.48794 9.07211 8.49387 9.03073 8.5077 8.9917C8.52152 8.95267 8.54296 8.91677 8.57076 8.88609L9.91111 7.37125C9.93825 7.33956 9.97145 7.31363 10.0088 7.29498C10.0461 7.27633 10.0868 7.2653 10.1284 7.26262ZM6.51877 8.76777L2.43307 14.0766C2.56928 14.5972 2.71924 14.8947 2.92135 15.0934C3.11783 15.2867 3.40518 15.4239 3.84178 15.5781L9.1274 11.225C8.46072 11.084 7.89322 10.7952 7.45139 10.3743C7.00819 9.95199 6.69662 9.40445 6.51877 8.76777ZM2.15846 15.1105C1.80221 15.3208 1.47994 15.6605 1.2551 16.0639C0.877912 16.7404 0.8051 17.5184 1.16721 18.0354C1.42756 18.2048 1.57994 18.2233 1.70799 18.2051C1.77807 18.1951 1.84932 18.1678 1.92768 18.1318C1.80346 17.7578 1.68158 17.3143 1.83002 16.8305C1.94838 16.445 2.23326 16.0866 2.74682 15.7563C2.65269 15.6918 2.56445 15.6191 2.48315 15.539C2.35748 15.4155 2.25112 15.2742 2.15842 15.1105L2.15846 15.1105Z"
                        fill="#F15A29"/>
                    </svg>

                    <p>
                      Book title or Ted talk title
                    </p>
                  </div>
                </div>

              </div>


              {/*CATEGORIES SECTION */}
              <div className={'p-4 rounded-xl bg-[#F2F6FE] lg:w-[90%] '}>
                <h2 className="text-2xl pb-4 text-mena-brand">
                  CATEGORY
                </h2>


                <div className={'flex flex-wrap items-center gap-4'}>
                  <div className={'px-4 py-1.5 rounded-3xl bg-mena-brand text-white'}>
                    Society and Education
                  </div>

                  <div className={'px-4 py-1.5 rounded-3xl bg-mena-brand text-white'}>
                    AI
                  </div>

                  <div className={'px-4 py-1.5 rounded-3xl bg-mena-brand text-white'}>
                    Model
                  </div>

                  <div className={'px-4 py-1.5 rounded-3xl bg-mena-brand text-white'}>
                    Media
                  </div>

                  <div className={'px-4 py-1.5 rounded-3xl bg-mena-brand text-white'}>
                    Artificial intelligence
                  </div>
                </div>


              </div>


              {/*TOPICS SECTION */}
              <div className={'p-4 rounded-xl bg-[#F2F6FE] lg:w-[90%] '}>
                <h2 className="text-2xl pb-4 text-mena-brand">
                  TOPICS
                </h2>


                <div className={'flex flex-wrap items-center gap-4'}>
                  <div className={'px-4 py-1.5 rounded-3xl border border-mena-brand text-mena-brand'}>
                    Politics
                  </div>

                </div>


              </div>

            </div>

            <div className="col-span-2 lg:col-span-4">
              <h2 className="text-2xl font-semibold pb-4 text-mena-brand">
                Biography
              </h2>
              <div dangerouslySetInnerHTML={{__html: speaker.bio}}>

              </div>

              <div>
                {speaker.videos?.length > 0 && (
                  <div className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-6">
                      {
                        speaker.videos.map(video => (
                          <AdminYoutubeVideo key={video.id} video={video}/>
                        ))
                      }
                    </div>

                  </div>
                )}
              </div>

              <div className={'relative rounded-3xl lg:mt-6 overflow-hidden py-6'}>
                <img className={'w-full object-cover rounded-3xl h-64'} src="/images/speaker-bg.jpeg"
                     alt="Background image"/>
                <div className="absolute inset-0">
                  <div className="flex flex-col h-full w-full justify-center px-12  ">
                    <p className="text-white">
                      Elevate your team with the inspiration and insights of <br/>
                      <span className="text-[#F15A29] font-semibold">
                    {speaker.name}
                  </span>
                    </p>
                    <p className="mt-4 text-white">
                      To invite this speaker
                    </p>

                    <div className={'mt-4 flex items-center space-x-4'}>
                      <Button onClick={bookSpeaker}
                              className="font-semibold text-white bg-mena-brand py-2.5 rounded-2xl">
                        Book Speaker
                      </Button>
                      <div>
                        <p className="text-xs text-white">
                          Call +971 52 630 6673
                        </p>
                        <p className={'text-xs text-white'}>
                          Email: info@mena-speakers.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={'mt-6'}>
                <h4 className="text-2xl font-semibold pb-4 text-mena-brand">
                  Frequently asked questions about {speaker.name}
                </h4>
                <div className="mt-6 w-full lg:max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    <AccordionItem value="item-1" className={'border shadow px-4 rounded-3xl bg-[#F2F6FE]'}>
                      <AccordionTrigger>How do I book a speaker for my event?</AccordionTrigger>
                      <AccordionContent>
                        To book a speaker, browse through our directory to find a speaker that fits your event's theme
                        and audience. Once you've selected a speaker, click on their profile to view more details and
                        use the "Book Now" button to fill out a booking request form. Our team will then assist you with
                        availability, pricing, and any other details needed to confirm the booking.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className={'border shadow px-4 rounded-3xl bg-[#F2F6FE]'}>
                      <AccordionTrigger>How do I book a speaker for my event?</AccordionTrigger>
                      <AccordionContent>
                        To book a speaker, browse through our directory to find a speaker that fits your event's theme
                        and audience. Once you've selected a speaker, click on their profile to view more details and
                        use the "Book Now" button to fill out a booking request form. Our team will then assist you with
                        availability, pricing, and any other details needed to confirm the booking.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className={'border shadow px-4 rounded-3xl bg-[#F2F6FE]'}>
                      <AccordionTrigger>How do I book a speaker for my event?</AccordionTrigger>
                      <AccordionContent>
                        To book a speaker, browse through our directory to find a speaker that fits your event's theme
                        and audience. Once you've selected a speaker, click on their profile to view more details and
                        use the "Book Now" button to fill out a booking request form. Our team will then assist you with
                        availability, pricing, and any other details needed to confirm the booking.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className={'border shadow px-4 rounded-3xl bg-[#F2F6FE]'}>
                      <AccordionTrigger>How do I book a speaker for my event?</AccordionTrigger>
                      <AccordionContent>
                        To book a speaker, browse through our directory to find a speaker that fits your event's theme
                        and audience. Once you've selected a speaker, click on their profile to view more details and
                        use the "Book Now" button to fill out a booking request form. Our team will then assist you with
                        availability, pricing, and any other details needed to confirm the booking.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default Show;
