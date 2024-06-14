import React from 'react';
import {Input} from "@/Components/ui/input";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {SpeakerType} from "@/types/speaker-type";
import {FaqType} from "@/types/faq-type";
import {Button} from "@/Components/ui/button";
import {Textarea} from "@/Components/ui/textarea";

interface AddFaqFormProps {
  mode : string | 'speaker' | 'general';
  speaker? : SpeakerType;
  faqAdded? : (faq: FaqType) => void;
  open? : boolean;
}

function AddFaqForm({mode = 'speaker', speaker, faqAdded} : AddFaqFormProps) {

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
      let postUrl = route('admin.speakers.faqs.store', speaker?.slug);

      if (mode === 'general') {
        postUrl = route('admin.faqs.store');
      }

      axios.post(postUrl, values
      ).then((response) => {
        formik.setSubmitting(false);
        if (faqAdded) {
          faqAdded(response.data);
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
  );
}

export default AddFaqForm;
