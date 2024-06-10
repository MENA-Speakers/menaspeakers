import React, {Fragment, useState} from 'react';
import {Head} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {Button} from "@/Components/ui/button";
import axios from "axios";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {Input} from "@/Components/ui/input";
import {Textarea} from "@/Components/ui/textarea";
import {useFormik} from "formik";
import * as Yup from "yup";
import {TestimonialType} from "@/types/testimonial-type";

interface TestimonialPageProps {
 testimonials: TestimonialType[];
}

function TestimonialPage( {testimonials} : TestimonialPageProps) {

  const [addingTestimonial, setAddingTestimonial] = useState(false);
  const [allTestimonials, setAllFaqs] = useState(testimonials);

  const handleTestimonialAdded = (testimonial: TestimonialType) => {
    setAllFaqs([...allTestimonials, testimonial]);
    setAddingTestimonial(false);
  }

  const deleteFaq = (faq: TestimonialType) => {
    axios.post(route('admin.testimonials.destroy', faq.id)).then(response => {
      setAllFaqs(allTestimonials.filter(f => f.id !== faq.id));
    })
  }

  const formik = useFormik({
    initialValues: {
      author_title: '',
      content: '',
      author: '',
      link: '',
    },

    validationSchema: Yup.object({
      author: Yup.string().required('Author is required'),
      content: Yup.string().required('Content is required'),
    }),

    onSubmit: values => {


      axios.post(route('admin.testimonials.store'), values
      ).then((response) => {
        formik.setSubmitting(false);
        handleTestimonialAdded(response.data);
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
    <Head title="Testimonials" />

    <div className="py-4">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

        <div className="py-4 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl text-gray-800">Testimonials </h1>
          <Button onClick={() => setAddingTestimonial(true)} className="bg-slate-100 text-gray-900 hover:bg-slate-200">
            Add Testimonial
          </Button>
        </div>

        <div className="overflow-hidden sm:rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            allTestimonials.map((testimonial, index) => (
              <div className={'space-y-2 p-3 border rounded-xl'}>
                <p>{testimonial.content}</p>
                <div className="flex items-center justify-between text-mena-300 border-t pt-1">
                  <p className={''}>{testimonial.author},
                    <span className="ml-3">{testimonial.author_title}</span>
                  </p>
                  <Button variant={'destructive'} size={'sm'} onClick={() => deleteFaq(testimonial)} className="bg-red-500 hover:bg-red-600 py-1 text-white">
                    Delete
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

    {/*ADD FAQ MODAL*/}
    <Transition.Root show={addingTestimonial} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setAddingTestimonial}>
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
                    onClick={() => setAddingTestimonial(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      New Testimonial
                    </Dialog.Title>
                    <div className="mt-2 w-ful">
                      <form onSubmit={formik.handleSubmit}
                            className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
                        <div>
                          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                          <div className="mt-1">
                            <Input type="text"
                                   name="author"
                                   value={formik.values.author}
                                   onChange={formik.handleChange}
                                   id="author"
                                   placeholder={'Saana Azzam'}/>
                          </div>
                          {
                            formik.touched.author && formik.errors.author ? (
                              <div className="text-red-500 text-xs italic">{formik.errors.author}</div>
                            ) : null
                          }
                        </div>

                        <div>
                          <label htmlFor="athur_title" className="block text-sm font-medium text-gray-700">Author
                            Title</label>
                          <div className="mt-1">
                            <Input type="text"
                                   name="author_title"
                                   value={formik.values.author_title}
                                   onChange={formik.handleChange}
                                   id="author_title"
                                   placeholder={'CEO MENA Speakers'}/>
                          </div>
                          {
                            formik.touched.author_title && formik.errors.author_title ? (
                              <div className="text-red-500 text-xs italic">{formik.errors.author_title}</div>
                            ) : null
                          }
                        </div>
                        <div>
                          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                          <div className="mt-1">
                            <Textarea
                              name="content"
                              value={formik.values.content}
                              rows={5}
                              onChange={formik.handleChange}
                              id="content"
                              placeholder={"Testimonial content"}/>
                          </div>
                          {
                            formik.touched.content && formik.errors.content ? (
                              <div className="text-red-500 text-xs italic">{formik.errors.content}</div>
                            ) : null
                          }
                        </div>
                        <div>
                          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Link</label>
                          <div className="mt-1">
                            <Input type="text"
                                   name="link"
                                   value={formik.values.link}
                                   onChange={formik.handleChange}
                                   id="link"
                                   placeholder={'Link to testimonial'}/>
                          </div>
                          {
                            formik.touched.link && formik.errors.link ? (
                              <div className="text-red-500 text-xs italic">{formik.errors.link}</div>
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

export default TestimonialPage;
