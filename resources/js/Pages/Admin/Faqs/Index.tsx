import React, {Fragment, useState} from 'react';
import {Head} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {Button} from "@/Components/ui/button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";
import {FaqType} from "@/types/faq-type";
import axios from "axios";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import AddFaqForm from "@/Components/Admin/AddFaqForm";
import {Input} from "@/Components/ui/input";
import {Textarea} from "@/Components/ui/textarea";
import {useFormik} from "formik";
import * as Yup from "yup";

interface FaqPageProps {
 faqs: FaqType[];
}

function FaqPage( {faqs} : FaqPageProps) {

  const [addingFaq, setAddingFaq] = useState(false);
  const [allFaqs, setAllFaqs] = useState(faqs);

  const handleFaqAdded = (faq: FaqType) => {
    setAllFaqs([...allFaqs, faq]);
    setAddingFaq(false);
  }

  const deleteFaq = (faq: FaqType) => {
    axios.post(route('admin.faqs.destroy', faq.id)).then(response => {
      setAllFaqs(allFaqs.filter(f => f.id !== faq.id));
    })
  }

  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },

    validationSchema: Yup.object({
      question: Yup.string().required('Question is required'),
      answer: Yup.string().required('Answer is required'),
    }),

    onSubmit: values => {


      axios.post(route('admin.faqs.store'), values
      ).then((response) => {
        formik.setSubmitting(false);
        handleFaqAdded(response.data);
        formik.resetForm();
      }).catch((error) => {
        //Set formik errors
        if (error.response.status === 422) {
          formik.setErrors(error.response.data.errors);
        }
        formik.setSubmitting(false);
      });
    },
  });

  return (

  <AdminLayout

  >
    <Head title="FAQs" />

    <div className="py-4">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

        <div className="py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl text-gray-800">FAQs </h1>
          <Button onClick={() => setAddingFaq(true)} className="bg-slate-100 text-gray-900 hover:bg-slate-200">
            Add Faq
          </Button>
        </div>

        <div className="overflow-hidden sm:rounded-lg">

          <Accordion type="single" collapsible className="w-full space-y-3">
            {
              allFaqs.map(faq => (
                <AccordionItem value="item-1" className={'border shadow px-4 rounded-3xl'}>
                  <AccordionTrigger>{ faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                    <div className="py-3 flex justify-end">
                      <Button onClick={() => deleteFaq(faq)} className="bg-red-500 text-white hover:bg-red-600">
                        Delete
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

          )) }

        </Accordion>
        </div>
      </div>
    </div>

    {/*ADD FAQ MODAL*/}
    <Transition.Root show={addingFaq} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setAddingFaq}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4  pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setAddingFaq(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      New FAQ
                    </Dialog.Title>
                    <div className="mt-2 w-ful">
                      <form onSubmit={formik.handleSubmit}
                            className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
                        <div>
                          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Question</label>
                          <div className="mt-1">
                            <Input type="text"
                                   name="question"
                                   value={formik.values.question}
                                   onChange={formik.handleChange}
                                   id="link"
                                   placeholder={'Question'}/>
                          </div>
                          {
                            formik.touched.question && formik.errors.question ? (
                              <div className="text-red-500 text-xs italic">{formik.errors.question}</div>
                            ) : null
                          }
                        </div>
                        <div>
                          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Answer</label>
                          <div className="mt-1">
                            <Textarea
                              name="answer"
                              value={formik.values.answer}
                              rows={5}
                              onChange={formik.handleChange}
                              id="answer"
                              placeholder={"Answer"}/>
                          </div>
                          {
                            formik.touched.answer && formik.errors.answer ? (
                              <div className="text-red-500 text-xs italic">{formik.errors.answer}</div>
                            ) : null
                          }
                        </div>

                        <div>
                          <div className="mt-1 flex justify-end">
                            <Button disabled={formik.isSubmitting} type="submit">
                              Submit
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </AdminLayout>
  );
}

export default FaqPage;
