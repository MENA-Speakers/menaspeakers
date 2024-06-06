import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select";
import {Input} from "@/Components/ui/input";
import PrimaryButton from "@/Components/PrimaryButton";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {CategoryType, SpeakerType} from "@/types/speaker-type";
import {FaqType} from "@/types/faq-type";
import {Button} from "@/Components/ui/button";
import {Textarea} from "@/Components/ui/textarea";

interface AddTopicFormProps {
  topicAdded? : (tag: CategoryType) => void;
  open? : boolean;
}

function AddTopicForm({ topicAdded} : AddTopicFormProps) {

  const formik = useFormik({
    initialValues: {
      name: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Topic name is required'),
    }),

    onSubmit: values => {
      let postUrl = route('admin.topics.store');

      axios.post(postUrl, values
      ).then((response) => {
        formik.setSubmitting(false);
        if (topicAdded) {
          topicAdded(response.data);
        }
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
    <form onSubmit={formik.handleSubmit}
          className=" max-w-4xl space-y-8 mx-auto py-8 px-8">
      <div>
        <label htmlFor="link" className="block text-sm font-medium text-gray-700">Topic name</label>
        <div className="mt-1">
          <Input type="text"
                 name="name"
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 id="link"
                 placeholder={'Topic'}/>
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
            Add Topic
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddTopicForm;
