import React from 'react';
import {SpeakerType} from "@/types/speaker-type";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/Components/ui/dialog";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import PhoneInput from "react-phone-input-2";
import {Textarea} from "@/Components/ui/textarea";
import {Button} from "@/Components/ui/button";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast} from "sonner";

interface SpeakerContactFormProps {
  speaker : SpeakerType;
  bookSpeaker: boolean;
  setBookSpeaker: (value: boolean) => void;
}
function SpeakerContactForm({speaker, setBookSpeaker, bookSpeaker}: SpeakerContactFormProps) {


  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const formik = useFormik( {
    initialValues: {
      full_name:  '',
      phone: '',
      company: '',
      email: '',
      message: '',
      speaker_id: speaker.id,
      source: 'Speaker Page'
    },


    validationSchema: Yup.object( {
      full_name: Yup.string().required( 'Full name is required' ),
      email: Yup.string().email().required( 'Email is required' ),
      phone: Yup.string().required( 'Phone number is required' ),
      message: Yup.string().required( 'Message is required' ),
    } ),


    onSubmit: values => {
      formik.setSubmitting( true );
      axios.post( route('leads.store'), values
      ).then( ( response ) => {
        formik.setSubmitting( false );
        setBookSpeaker( false)
        setIsSubmitting(false)
        toast.success('Your request has been submitted successfully. We will get back to you shortly.')
      } ).catch( ( error ) => {
        if ( error.response.status === 422 ) {
          formik.setErrors( error.response.data.errors );
        }
        formik.setSubmitting( false );
      } );
    },
  } );

  return (
    <Dialog open={bookSpeaker} onOpenChange={setBookSpeaker}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className={'text-center text-2xl'}>Book <span className="text-mena-brand font-semibold">{speaker.first_name + ' ' + speaker.last_name}</span></DialogTitle>

        </DialogHeader>
        <form onSubmit={formik.handleSubmit} className="p-8 space-y-3">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="full_name" className="text-slate-600">
              Full Name
            </Label>
            <Input
              id="full_name"
              placeholder={'Full Name'}
              value={formik.values.full_name}
              onChange={formik.handleChange}
            />

            {
              formik.touched.full_name && formik.errors.full_name ? (
                <p className={'text-sm text-red-500 mt-1'}>{formik.errors.full_name}</p>
              ) : null
            }
          </div>

          <div className=" gap-2">
            <Label htmlFor="email" className="text-slate-600">
              Email
            </Label>
            <Input
              id="email"
              type={'email'}
              placeholder={'example@email.com'}
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            {
              formik.touched.email && formik.errors.email ? (
                <p className={'text-sm text-red-500 mt-1'}>{formik.errors.email}</p>
              ) : null
            }
          </div>
          <div className=" gap-2">
            <Label htmlFor="email" className="text-slate-600">
              Company
            </Label>
            <Input
              id="company"
              type={'text'}
              placeholder={''}
              value={formik.values.company}
              onChange={formik.handleChange}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="phone">
              Phone number
            </Label>
            <PhoneInput
              placeholder="Enter phone number"
              containerClass={'w-full'}
              inputClass={'w-full'}
              country={'ae'}
              value={formik.values.phone}
              onChange={
                (value) => formik.setFieldValue('phone', value)
              }/>

            {
              formik.touched.phone && formik.errors.phone ? (
                <p className={'text-sm text-red-500 mt-1'}>{formik.errors.phone}</p>
              ) : null
            }
          </div>

          <div className="grid flex-1 gap-2 pt-2">
            <Label htmlFor="Message" className="sr-only">
              Your Message
            </Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />

            {
              formik.touched.message && formik.errors.message ? (
                <p className={'text-sm text-red-500 mt-1'}>{formik.errors.message}</p>
              ) : null
            }
          </div>
          <div className="flex justify-end">
            <Button disabled={formik.isSubmitting} type="submit" className="px-3">
              <span className="">Book Now</span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default SpeakerContactForm;
