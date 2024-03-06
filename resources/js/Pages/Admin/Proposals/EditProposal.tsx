import React from 'react';
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
import {Pencil} from "lucide-react";
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

  const formik = useFormik( {
    initialValues: {
      title: proposal.title ? proposal.title : '',
    },

    onSubmit: values => {
      axios.post( route( 'admin.proposals.update', proposal.hash_id ), values).then(
        response => {
          setProposal(response.data)

        }
      ).catch(error => {

      })
    },

  } );


  return (
    <Dialog>
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

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="speaker">Speaker Event</SelectItem>
                  <SelectItem value="management">Event Management</SelectItem>
                  <SelectItem value="mc">MC, Moderator</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="public">Public Speaking</SelectItem>
                </SelectContent>
              </Select>



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
