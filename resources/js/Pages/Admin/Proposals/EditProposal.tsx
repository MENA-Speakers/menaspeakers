import React, {useState} from 'react';
import {ProposalType} from "@/types/proposal-type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"
import {CalendarIcon, Pencil} from "lucide-react";
import {Button} from "@/Components/ui/button";
import {useFormik} from "formik";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import axios from "axios";

interface EditProposalProps {
  proposal: ProposalType,
  setProposal: (proposal: ProposalType) => void
}
function EditProposal({proposal, setProposal} : EditProposalProps) {

  const [open, setOpen] = useState(false)

  const formik = useFormik( {
    initialValues: {
      title: proposal.title ? proposal.title : '',
      event_date: proposal.event_date ? proposal.event_date : '',
      proposal_type: proposal.type ? proposal.type : '',
    },

    onSubmit: values => {
      axios.post( route( 'admin.proposals.update', proposal.hash_id ), values).then(
        response => {
          setProposal(response.data)
          formik.setSubmitting(false)
          setOpen(false)
        }
      ).catch(error => {
        //set formik errors
        if (error.response.status === 422) {
          formik.setErrors(error.response.data.errors)
        }
        formik.setSubmitting(false)
      })
    },

  } );


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant={'outline'}>
          <Pencil size={16} className={'mr-2'}/>
          Edit Proposal
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit - {proposal.title}</DialogTitle>
          <DialogDescription>
            <form onSubmit={formik.handleSubmit}
                  className="space-y-8 mx-auto py-8">
              <div className="">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Title</Label>
                  <div className="mt-1">
                    <Input type="text"
                           name="title"
                           id="title"
                           value={formik.values.title}
                           onChange={formik.handleChange}
                           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           placeholder="Propsal title"/>
                  </div>

                  {
                    formik.touched.title && formik.errors.title ? (
                      <div className="text-red-500 text-xs italic">{formik.errors.title}</div>
                    ) : null
                  }
                </div>

              </div>

              <Select onValueChange={(value) => formik.setFieldValue('proposal_type', value)} defaultValue={formik.values.proposal_type}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Prosal Type"/>
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="speaker">Speaker Event</SelectItem>
                  <SelectItem value="management">Event Management</SelectItem>
                  <SelectItem value="mc">MC, Moderator</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="public">Public Speaking</SelectItem>
                </SelectContent>
              </Select>

                {
                  formik.touched.proposal_type && formik.errors.proposal_type ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.proposal_type}</div>
                  ) : null
                }

              <div>
                <Label htmlFor="event_date" className="block text-sm font-medium text-gray-700">Event date</Label>
                <div className="mt-1">
                  <Input type="date"
                         name="event_date"
                         id="event_date"
                         value={formik.values.event_date}
                         onChange={formik.handleChange}
                         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="Date of event"/>
                </div>

                {
                  formik.touched.event_date && formik.errors.event_date ? (
                    <div className="text-red-500 text-xs italic">{formik.errors.event_date}</div>
                  ) : null
                }
              </div>


              <div>
                <div className="mt-1 flex justify-end">
                  <Button disabled={formik.isSubmitting} type="submit">
                    Update Proposal
                  </Button>
                </div>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>

  );
}

export default EditProposal;
