import React, {useEffect} from 'react';
import MainLayout from "@/Layouts/MainLayout";
import {Head} from "@inertiajs/react";

function Index() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          portalId: '5847879',
          formId: 'fcd954e7-779b-4047-bb57-310149a2c32c',
          target: '#hubspotForm'
        })
      }
    });
  }, []);



  return (
    <MainLayout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="relative h-[350px]">
        <img src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/80">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm px-6 lg px-8 pb-12  px-6 lg:px-0">
          <div  id="hubspotForm"></div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
