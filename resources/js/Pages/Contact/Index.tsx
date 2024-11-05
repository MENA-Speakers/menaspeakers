import React, { useEffect, useRef } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import ContactPageForm from "@/Components/ui/ContactPageForm";
import { SpeakerType } from "@/types/speaker-type";
interface ContactPageProps {
  speaker: SpeakerType;
}
function Index({ speaker }: ContactPageProps) {
  // const formRef = useRef(null);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.setAttribute('data-b24-form', 'inline/53/h8olp0');
  //   script.setAttribute('data-skip-moving', 'true');
  //
  //   script.innerHTML = `
  //     (function(w,d,u){
  //       var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
  //       var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
  //     })(window,document,'https://cdn.bitrix24.com/b25531643/crm/form/loader_53.js');
  //   `;
  //
  //   formRef.current.appendChild(script);
  //
  // }, []);

  return (
    <MainLayout>
      <Head>
        <title>Contact Us</title>
      </Head>

      <section className="py-12 container">
        <div className="max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto  px-6 lg:px-0">
          {/*<div ref={formRef}>*/}
          {/*  /!* The Bitrix form will load here *!/*/}
          {/*</div>*/}
          <div className="w-full lg:py-24 lg:w-1/2">
            <h1 className="text-4xl font-semibold text-mena-brand">
              Connect With Our Team
            </h1>
            <p className="mt-6">
              Need help getting a speaker for your next event? Whether it is a
              former world-leader or the latest subject-matter-expert we are
              here to help. We can help you with speaker choices, availability
              and fees.
            </p>
            <div className="py-6 lg:py-12">
              <h3 className="font-semibold text-lg">Email</h3>
              <a href={"mailto:info@mena-speakers.com"}>
                info@mena-speakers.com
              </a>
            </div>

            <div className="py-6 lg:py-12">
              <h3 className="font-semibold text-lg">Socials</h3>
              <div className={"flex space-x-4 mt-4"}>
                <a
                  target={"_blank"}
                  href={
                    "https://www.linkedin.com/company/mena-speakers/mycompany/"
                  }
                  className="p-2 rounded-full border"
                >
                  <Linkedin className={"h-5 w-5 stroke-1 text-mena-brand"} />
                </a>

                <a
                  target={"_blank"}
                  href={"https://twitter.com/menaspeakers"}
                  className="p-2 rounded-full border"
                >
                  <Twitter className={"h-5 w-5 stroke-1 text-mena-brand"} />
                </a>

                <a
                  target={"_blank"}
                  href={"https://www.facebook.com/menaspeakers"}
                  className="p-2 rounded-full border"
                >
                  <Facebook className={"h-5 w-5 stroke-1 text-mena-brand"} />
                </a>
                <a
                  target={"_blank"}
                  href={"https://www.instagram.com/menaspeakers/"}
                  className="p-2 rounded-full border"
                >
                  <Instagram className={"h-5 w-5 stroke-1 text-mena-brand"} />
                </a>

                <a
                  target={"_blank"}
                  href={"https://www.youtube.com/@menaspeakers4868"}
                  className="p-2 rounded-full border"
                >
                  <Youtube className={"h-5 w-5 stroke-1 text-mena-brand"} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-6 lg:p-24">
            {speaker && (
              <div className="flex items-center py-4 pb-6">
                <div>
                  <img
                    src={speaker.image}
                    alt={speaker.first_name + " " + speaker.last_name}
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
                <div className={"ml-4"}>
                  <p className={"italic"}>Booking</p>
                  <h2 className="text-2xl font-semibold mt-2">
                    {speaker.first_name + " " + speaker.last_name}
                  </h2>
                  <p className="text-lg text-slate-600">{speaker.title}</p>
                </div>
              </div>
            )}
            <p>Fill the form so that our team can reach out to you</p>

            <ContactPageForm speaker={speaker} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
