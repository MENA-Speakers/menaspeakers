import React, {useEffect} from 'react';
import {Head, router} from "@inertiajs/react";
import {useFormik} from "formik";
import * as Yup from "yup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminLayout from "@/Layouts/AdminLayout";
import {Textarea} from "@/Components/ui/textarea";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {PortfolioType} from "@/types/portfolio-type";
import {ProfileType} from "@/types/admin-profiles";
import {Popover, PopoverContent, PopoverTrigger} from "@/Components/ui/popover";
import {FormControl} from "@/Components/ui/form";
import {Button} from "@/Components/ui/button";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/Components/ui/command";
import {CheckIcon, ChevronsUpDown} from "lucide-react";
import {cn} from "@/lib/utils";

function Create( {portfolio, profiles} : { portfolio: PortfolioType, profiles: ProfileType[] }) {

  const [isEditing, setIsEditing] = React.useState( false );

  useEffect(() => {
    if (portfolio) {
      setIsEditing(true);
    }
  }, [portfolio]);


  const formik = useFormik( {
    initialValues: {
      title: portfolio?.title ? portfolio.title : '',
      fee: portfolio?.fee ? portfolio.fee : '',
      body: portfolio?.body ? portfolio.body : '',
      summary: portfolio?.summary ? portfolio.summary : '',
      profile: portfolio?.profile_id ? portfolio.profile_id : '',
    },

    validationSchema: Yup.object( {
      title: Yup.string()
        .required( 'Title is required' ),
      summary: Yup.string()
        .required( 'Summary is required' ),
      profile: Yup.string()
        .required( 'Speaker is required' ),
      body: Yup.string()
        .required( 'Content are required' ),
      fee: Yup.string()
        .required( 'Fee is required' ),
      about: Yup.string()
    } ),

    onSubmit: values => {
      let url = route( 'admin.portfolios.store' );
      let method = 'post';

      if ( isEditing ) {
        url = route( 'admin.portfolios.update', portfolio.id );
      }


      axios( {
        method: method,
        url: url,
        data: values,
      } ).then( ( response ) => {
        formik.setSubmitting( false );
        router.visit( route( 'admin.portfolios.index' ) );
      } ).catch( ( error ) => {
        //Set formik errors
        if ( error.response.status === 422 ) {
          formik.setErrors( error.response.data.errors );
        }
        formik.setSubmitting( false );
      } );
    },
  } );


  return (
    <AdminLayout
    >
      <Head title="Add Porfolio"/>

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="">
            <h2 className=" font-semibold text-lg text-gray-900">Add Portfolio</h2>
            <p className={'text-neutral-500'}>Portfolio will be used to populate proposals</p>
          </div>
        </div>
        <div className="sm:p-6 lg:p-4 bg-white overflow-hidden sm:rounded-lg">
          <form onSubmit={formik.handleSubmit}
                className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</Label>
              <div className="mt-1">
                <Input type="text"
                       name="title"
                       id="title"
                       value={formik.values.title}
                       onChange={formik.handleChange}
                       className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                       placeholder="Title or Topic"/>
              </div>

              {
                formik.touched.title && formik.errors.title ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.title}</div>
                ) : null
              }
            </div>
            <div className="grid grid-cols-2 gap-6">

              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Fee</Label>
                <div className="mt-1">
                  <Input type="text"
                         name="fee"
                         id="fee"
                         value={formik.values.fee}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Speaking Fee"/>
                </div>

                {
                  formik.touched.fee && formik.errors.fee ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.fee}</div>
                  ) : null
                }
              </div>

              {
                !isEditing &&

                <div className={''}>
                  <Label htmlFor="profile" className="block text-sm font-medium text-gray-700">Speaker</Label>
                  <div className="mt-1">

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !formik.values.profile && "text-muted-foreground"
                          )}
                        >
                          {formik.values.profile
                            ? profiles.find(
                              (profile) => profile.id === formik.values.profile
                            )?.full_name
                            : "Select speaker"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search Speakers..."
                            className="h-9"
                          />
                          <CommandEmpty>No framework found.</CommandEmpty>
                          <CommandGroup>
                            {profiles.map((profile) => (
                              <CommandItem
                                value={profile.full_name}
                                key={profile.id}
                                onSelect={() => {
                                  formik.setFieldValue("profile", profile.id)
                                }}
                              >
                                {profile.full_name}
                                <CheckIcon
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    profile.id === formik.values.profile
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>

                  </div>
                  {
                    formik.touched.profile && formik.errors.profile ? (
                      <div className="text-red-500 text-xs italic">{formik.errors.profile}</div>
                    ) : null
                  }
                </div>
              }


            </div>


            <div>
              <Label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</Label>
              <div className="mt-1">
                <Textarea name="summary"
                          value={formik.values.summary}
                          onChange={formik.handleChange}
                          id="summary"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">

                </Textarea>
              </div>

              {
                formik.touched.summary && formik.errors.summary ? (
                  <div className="text-red-500 text-xs italic">{formik.errors.summary}</div>
                ) : null
              }

            </div>

            <div>
              <Label htmlFor="body" className="block text-sm font-medium text-gray-700">What the speaker can deliver</Label>

              <div className="mt-1">
                <ReactQuill
                  theme='snow'
                  style={{height: '200px'}}
                  value={formik.values.body}
                  onChange={(e) => formik.setFieldValue('body', e)}
                />

              </div>

              {formik.touched.body && formik.errors.body ? (
                <div className='m-0.5 text-sm text-red-500'>{formik.errors.body}</div>
              ) : null}

            </div>

            <div className={'pt-8'}>
              <div className=" flex justify-end">
                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                  {
                    portfolio ? 'Update Portfolio' : 'Add Portfolio'
                  }
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Create;
