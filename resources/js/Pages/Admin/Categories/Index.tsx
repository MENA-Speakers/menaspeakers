import React, {Fragment} from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import {CategoryType} from "@/types/speaker-type";
import {Button} from "@/Components/ui/button";
import axios from "axios";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";
import {Input} from "@/Components/ui/input";
import PrimaryButton from "@/Components/PrimaryButton";
import {useFormik} from "formik";
import * as Yup from "yup";

interface CategoryPageProps {
  categories: CategoryType[];
  topics: CategoryType[];
}

function Index({categories, topics}: CategoryPageProps) {

  const [allCategories, setAllCategories] = React.useState<CategoryType[]>(categories);
  const [allTopics, setAllTopics] = React.useState<CategoryType[]>(topics);
  const [addingCategory, setAddingCategory] = React.useState<boolean>(false);

  const deleteCategory = (id: number) => {
    axios.post(route('admin.categories.destroy', {id: id})).then(response => {
      setAllCategories(allCategories.filter(category => category.id !== id));
    });
  }

  const deleteTopic = (id: number) => {
    axios.post(route('admin.topics.delete', {id: id})).then(response => {
      setAllCategories(allCategories.filter(topic => topic.id !== id));
    });
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },

    validationSchema: Yup.object({

      name: Yup.string().required('Category name is required'),
    }),

    onSubmit: values => {

      axios.post(route('admin.categories.store'), values
      ).then((response) => {
        formik.setSubmitting(false);
        setAddingCategory(false)
        formik.resetForm();
        setAllCategories([...allCategories, response.data]);
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
    <AdminLayout>
      <div>
        <h1>Categories and Topics</h1>
      </div>

      <div className="flex gap-12 mt-8">
        <div className="w-full lg:w-1/2 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button onClick={() => setAddingCategory(true)} variant={'outline'} size={'sm'} className="btn btn-primary">Add Category</Button>
          </div>
          <div className="mt-4 space-y-4">
            {
              allCategories.map((category, index) => (
                <div key={index} className="flex justify-between items-center rounded bg-white py-2 border px-6">
                  <div>
                    <h3 className="">{category.name}</h3>
                  </div>
                  <div>
                    <Button onClick={() => deleteCategory(category.id)} variant={'destructive'} size={'sm'}>Delete</Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Topics</h2>
            <Button  variant={'outline'} size={'sm'} className="btn btn-primary">Add Topic</Button>
          </div>
          <div className="mt-4 space-y-4">
            {
              allCategories.map((category, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm px-6">
                  <div>
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                  <div>
                    <Button variant={'destructive'} size={'sm'}>Delete</Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>


      {/*ADD CATEGORY*/}
      <Transition.Root show={addingCategory} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setAddingCategory}>
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
                      onClick={() => setAddingCategory(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                       Add Category
                      </Dialog.Title>
                      <div className="mt-2 w-ful">
                        <form onSubmit={formik.handleSubmit}
                              className=" max-w-4xl space-y-8 mx-auto py-8 px-8">

                          <div>
                            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Category Name</label>
                            <div className="mt-1">
                              <Input type="text"
                                     name="name"
                                     value={formik.values.name}
                                     onChange={formik.handleChange}
                                     id="link"
                                     placeholder={'Category Name'} />
                            </div>
                            {
                              formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500 text-xs italic">{formik.errors.name}</div>
                              ) : null
                            }
                          </div>

                          <div>
                            <div className="mt-1 flex justify-end">
                              <Button disabled={formik.isSubmitting} type="submit">
                               Add Category
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

export default Index;
