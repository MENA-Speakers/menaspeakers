import React from 'react';
import {Head, Link, router} from "@inertiajs/react";
import {useFormik} from "formik";
import AdminLayout from "@/Layouts/AdminLayout";
import {Input} from "@/Components/ui/input";
import {ProposalType} from "@/types/proposal-type";
import ReactQuill from "react-quill";
import PrimaryButton from "@/Components/PrimaryButton";
import {Label} from "@/Components/ui/label";
import axios from "axios";
import {Button} from "@/Components/ui/button";
import SelectSpeakerSlide from "@/Pages/Admin/Profiles/SelectSpeakerSlide";


interface CreateProposalProps {
  proposal: ProposalType,
}

function CreateProposal( {proposal} : CreateProposalProps ) {


  const [openSelectSpeaker, setOpenSelectSpeaker] = React.useState(false)
  const [selectedSpeakers, setSelectedSpeakers] = React.useState([])

  const formik = useFormik( {
    initialValues: {
      title: proposal?.title ? proposal.title : '',
      deal: proposal?.deal ? proposal.deal : '',
      footer: proposal?.footer ? proposal.footer : '',
    },
    onSubmit: values => {
      axios.post( route( 'admin.proposals.store' ), values)
    },
  });

  const openSelectSpeakerSlide = () => {
    setOpenSelectSpeaker(true)
  }

  const updatedSelectedSpeakers = (selectedSpeakers: any) => {
    console.log(selectedSpeakers)
  }
  return (

    <AdminLayout>
      <Head title="Speaker" />

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-900">New Proposal</h2>

            <SelectSpeakerSlide
              isOpen={openSelectSpeaker}
              setIsOpen={setOpenSelectSpeaker}
              updatedSelectedSpeakers={updatedSelectedSpeakers}
            />
          </div>

          <div className="overflow-hidden sm:rounded-lg">
            <form onSubmit={formik.handleSubmit}
                  className="space-y-8 mx-auto py-8 px-8">
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


              <div>
                <div className="mt-1 flex justify-end">
                  <PrimaryButton disabled={formik.isSubmitting} type="submit">
                    {
                      proposal ? 'Update Proposal' : 'Create Proposal'
                    }
                  </PrimaryButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default CreateProposal;
