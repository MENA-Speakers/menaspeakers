import React, {useEffect, useRef} from 'react';
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

function Index() {

  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/53/h8olp0');
    script.setAttribute('data-skip-moving', 'true');

    script.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.com/b25531643/crm/form/loader_53.js');
    `;

    formRef.current.appendChild(script);

  }, []);


  return (
    <MainLayout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="relative h-[350px]">
        <img
          aria-label={'Contact hero image'}
          src="https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZnJlbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="groupe of mena speakers in front of people at forume event" className="w-full h-full object-cover"/>

        <div className="absolute inset-0 z-0">
          <div className="w-full h-full z-20 bg-black/50">
            <div className="max-w-7xl mx-auto flex items-center justify-center h-full  px-4 sm px-6 lg px-8">
              <h1 className="text-white text-5xl font-bold">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm px-6 lg px-8 pb-12  px-6 lg:px-0">
          <div ref={formRef}>
            {/* The Bitrix form will load here */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Index;
