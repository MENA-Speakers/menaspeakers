import React, {Fragment, useRef} from 'react';
import {useFormik} from "formik";
import axios from "axios";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";

interface AddVideoLinkDialogProps {
  handleLinkAdded: (links: string[]) => void
  id: string
}

export function AddVideoLink({handleLinkAdded, id}: AddVideoLinkDialogProps) {

  const cancelButtonRef = useRef(null)



  const formik = useFormik( {
    initialValues: {
      link: '',
    },

    onSubmit: values => {


      axios.post( route('admin.proposals.rate-cards.videos.store', id) , values).then(
        response => {
          handleLinkAdded(response.data as string[])
          formik.setSubmitting(false)
          //reset form
          formik.resetForm()
        }

      ).catch(error => {
        console.log(error)
        //set formik errors
        if (error.response.status === 422) {
          formik.setErrors(error.response.data.errors)
        }
        formik.setSubmitting(false)
      })
    },

  } );

  return (
    <form onSubmit={formik.handleSubmit}
          className=" items-end mx-auto py-4 w-full">
      <div>
        <Label htmlFor="link" className="block text-sm font-medium text-gray-700">Link</Label>
        <div className="mt-1">
          <Input type="url"
                 name="link"
                 id="link"
                 value={formik.values.link}
                 onChange={formik.handleChange}
                 className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                 placeholder="Video URL"/>
        </div>

        {
          formik.touched.link && formik.errors.link ? (
            <div className="text-red-500 text-xs italic">{formik.errors.link}</div>
          ) : null
        }
      </div>

      <div>
        <div className="mt-1 flex justify-end">
          <Button disabled={formik.isSubmitting} type="submit" size={'sm'}>
            Add Link
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddVideoLink;
