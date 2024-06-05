import React from 'react';
import {Head} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {Button} from "@/Components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";
import {FaqType} from "@/types/faq-type";

interface FaqPageProps {
 faqs: FaqType[];
}

function FaqPage( {faqs} : FaqPageProps) {

  return (

  <AdminLayout

  >
    <Head title="FAQs" />

    <div className="py-4">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

        <div className="py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl text-gray-800">FAQs </h1>
          <Button className="bg-slate-100 text-gray-900 hover:bg-slate-200">
            Add Faq
          </Button>
        </div>

        <div className="overflow-hidden sm:rounded-lg">

          <Accordion type="single" collapsible className="w-full space-y-3">
            {
              faqs.map(faq => (
                <AccordionItem value="item-1" className={'border shadow px-4 rounded-3xl'}>
                  <AccordionTrigger>{ faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>

          )) }

        </Accordion>
        </div>
      </div>
    </div>
  </AdminLayout>
  );
}

export default FaqPage;
