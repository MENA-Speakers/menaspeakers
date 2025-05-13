import React from "react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import PhoneInput from "react-phone-input-2";
import { Textarea } from "@/Components/ui/textarea";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";
import { FormMessage } from "@/Components/ui/form";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert";
import { ThumbsUp } from "lucide-react";
import { SpeakerType } from "@/types/speaker-type";
import { router } from "@inertiajs/react";

interface FooterContactFormProps {
  speaker?: SpeakerType;
}

interface FormValues {
  full_name: string;
  email: string;
  phone: string;
  message: string;
  company: string;
  source: string;
  referral: string;
}
const blacklistedEmails = ["ayman5edris@gmail.com"];

function FooterContactForm({ speaker }: FooterContactFormProps) {
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const sendBitrix = async (values: FormValues) => {
    const crmUrl = `${import.meta.env.VITE_BITRIX_CRM_URL}/crm.deal.add.json?  
        FIELDS[TITLE]=${encodeURIComponent(
          "New Lead from MENA Speakers - contact form"
        )}  
        &FIELDS[NAME]=${encodeURIComponent(values.full_name)}  
        &FIELDS[EMAIL]=${encodeURIComponent(values.email)}  
        &FIELDS[PHONE]=${encodeURIComponent(values.phone)}  
        &FIELDS[PHONE][0][VALUE]=${encodeURIComponent(values.phone)}  
        &FIELDS[PHONE][0][VALUE_TYPE]=${"WORK"}  
        &FIELDS[EMAIL][0][VALUE]=${encodeURIComponent(values.email)}  
        &FIELDS[EMAIL][0][VALUE_TYPE]=${"WORK"}  
        &FIELDS[COMPANY_TITLE]=${encodeURIComponent(values.company)}  
        &FIELDS[COMMENTS]=${encodeURIComponent(
          `${values.message} - Source: ${values.source} - Referral: ${
            values.referral
          } ${speaker?.name && " | Speaker: - " + speaker.name} | Phone: ${
            values.phone
          } | Email: ${values.email}`
        )}  
        &FIELDS[UTM_SOURCE]=${encodeURIComponent(values.source)}  
        &FIELDS[WEB]=${encodeURIComponent(
          `https://mena-speakers.com/speakers/${speaker?.slug}`
        )}  
        `;

    try {
      const crmResponse = await fetch(crmUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!crmResponse.ok) {
        throw new Error("Failed to create lead in CRM");
      }
    } catch (error) {
      console.error("Error creating lead in CRM:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      full_name: "",
      phone: "",
      subject: "",
      speaker_id: speaker?.id,
      company: "",
      email: "",
      message: "",
      source: "contact page",
      referral: "Google",
    },

    validationSchema: Yup.object({
      full_name: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email()
        .required("Email is required")
        .test(
          "not-blacklisted",
          "Something went wrong, try again later",
          (value) => {
            if (!value) return true;
            return !blacklistedEmails.some(
              (blacklistedEmail) =>
                value.toLowerCase() === blacklistedEmail.toLowerCase()
            );
          }
        ),
      phone: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
      referral: Yup.string().required("Please select how you heard about us"),
    }),

    onSubmit: (values) => {
      // Double-check blacklist as a safety measure
      const isBlacklisted = blacklistedEmails.some(
        (blacklistedEmail) =>
          values.email.toLowerCase() === blacklistedEmail.toLowerCase()
      );

      if (isBlacklisted) {
        toast.error(
          "This email address is not accepted. Please use a different email."
        );
        formik.setSubmitting(false);
        return;
      }

      if (values.subject !== "") {
        toast.error("Something went wrong. Please try again later.");
        formik.setSubmitting(false);
        return;
      }

      // Only proceed with submission if all checks pass
      sendBitrix(values)
        .then(() => {
          axios
            .post(route("leads.store"), values)
            .then((response) => {
              formik.setSubmitting(false);
              toast.success("Your request has been submitted successfully.");
              router.visit(route("pages.thank-you"), { method: "get" });
              setFormSubmitted(true);
            })
            .catch((error) => {
              if (error.response && error.response.status === 422) {
                formik.setErrors(error.response.data.errors);
              }
              formik.setSubmitting(false);
            });
        })
        .catch((error) => {
          console.error("Error in submission:", error);
          formik.setSubmitting(false);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className=" space-y-6 gap-6 py-12">
      {formSubmitted && (
        <div className={"col-span-2 pb-6 text-teal-600 "}>
          <Alert className={"border-teal-500 text-teal-600"}>
            <ThumbsUp className="h-4 w-4 text-teal-600 stroke-1" />
            <AlertTitle>Message Received</AlertTitle>
            <AlertDescription>
              Your request has been submitted successfully. We will get back to
              you shortly.
            </AlertDescription>
          </Alert>
        </div>
      )}
      <div className="">
        <Label htmlFor="full_name" className="text-slate-600 sr-only">
          Full Name
        </Label>
        <Input
          id="full_name"
          disabled={formik.isSubmitting || formSubmitted}
          placeholder={"Full Name"}
          value={formik.values.full_name}
          onChange={formik.handleChange}
        />
        {formik.touched.full_name && formik.errors.full_name ? (
          <p className={"text-sm text-red-500 mt-1"}>
            {formik.errors.full_name}
          </p>
        ) : null}
      </div>

      <div className="hidden">
        <Label htmlFor="subject" className="text-slate-600 sr-only">
          Subject
        </Label>
        <Input
          id="subject"
          hidden={true}
          disabled={formik.isSubmitting || formSubmitted}
          placeholder={"subject"}
          value={formik.values.subject}
          onChange={formik.handleChange}
        />
        {formik.touched.full_name && formik.errors.full_name ? (
          <p className={"text-sm text-red-500 mt-1"}>
            {formik.errors.full_name}
          </p>
        ) : null}
      </div>

      <div className="">
        <Label htmlFor="company" className="text-slate-600 sr-only">
          Company Name
        </Label>
        <Input
          id="company"
          disabled={formik.isSubmitting || formSubmitted}
          placeholder={"Company Name"}
          value={formik.values.company}
          onChange={formik.handleChange}
        />

        {formik.touched.company && formik.errors.company ? (
          <p className={"text-sm text-red-500 mt-1"}>{formik.errors.company}</p>
        ) : null}
      </div>

      <div className=" gap-2">
        <Label htmlFor="email" className="text-slate-600 sr-only">
          Email
        </Label>
        <Input
          id="email"
          type={"email"}
          disabled={formik.isSubmitting || formSubmitted}
          placeholder={"example@email.com"}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className={"text-sm text-red-500 mt-1"}>{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="grid flex-1 gap-2">
        <Label htmlFor="phone" className={"sr-only"}>
          Phone number
        </Label>
        <Input
          id="phone"
          placeholder={"Phone number"}
          disabled={formik.isSubmitting || formSubmitted}
          value={formik.values.phone}
          onChange={formik.handleChange}
        />

        {formik.touched.phone && formik.errors.phone ? (
          <p className={"text-sm text-red-500 mt-1"}>{formik.errors.phone}</p>
        ) : null}
      </div>

      <div className="col-span-2 flex-1 gap-2">
        <Label htmlFor="Message" className="sr-only">
          Your Message
        </Label>
        <Textarea
          id="message"
          rows={4}
          disabled={formik.isSubmitting || formSubmitted}
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
        />

        {formik.touched.message && formik.errors.message ? (
          <p className={"text-sm text-red-500 mt-1"}>{formik.errors.message}</p>
        ) : null}
      </div>
      <div className="col-span-2 flex-1 gap-2">
        <Label htmlFor="referral" className="text-slate-600">
          Where did you hear about us?
        </Label>
        <select
          id="referral"
          disabled={formik.isSubmitting || formSubmitted}
          value={formik.values.referral}
          onChange={formik.handleChange}
          className="border rounded-md p-2 w-full bg-slate-200"
        >
          <option value="Google">Google</option>
          <option value="Instagram">Instagram</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Facebook">Facebook</option>
          <option value="Youtube">Youtube</option>
          <option value="Others">Others</option>
        </select>
        {formik.touched.referral && formik.errors.referral ? (
          <p className={"text-sm text-red-500 mt-1"}>
            {formik.errors.referral}
          </p>
        ) : null}
      </div>
      <div className="col-span-2">
        <Button
          disabled={
            formik.isSubmitting ||
            formSubmitted ||
            blacklistedEmails.some(
              (blacklistedEmail) =>
                formik.values.email.toLowerCase() ===
                blacklistedEmail.toLowerCase()
            )
          }
          type="button"
          onClick={(e) => {
            e.preventDefault();

            // Check blacklist before submitting
            const isBlacklisted = blacklistedEmails.some(
              (blacklistedEmail) =>
                formik.values.email.toLowerCase() ===
                blacklistedEmail.toLowerCase()
            );

            if (isBlacklisted) {
              toast.error(
                "This email address is not accepted. Please use a different email."
              );
              return;
            }

            formik.handleSubmit();
          }}
          className="px-3 w-full bg-mena-brand hover:bg-mena-brand/90"
        >
          <span className="">Send Message</span>
        </Button>
      </div>
    </form>
  );
}

export default FooterContactForm;
