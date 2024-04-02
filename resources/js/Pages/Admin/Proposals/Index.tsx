import React from 'react';
import {Head, Link, router} from "@inertiajs/react";
import {useFormik} from "formik";
import AdminLayout from "@/Layouts/AdminLayout";
import {Button} from "@/Components/ui/button";
import {Input} from "@/Components/ui/input";
import {ProposalType} from "@/types/proposal-type";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell, TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/Components/ui/dropdown-menu";
import {ProfileType} from "@/types/admin-profiles";
import axios from "axios";
import ConfirmPortfolioSlide from "@/Pages/Admin/Proposals/ConfirmPortfolioSlide";
import {RateCardType} from "@/types/rate-card";



interface proposalData {
  data: ProposalType[],
  links: {
    first: string,
    last: string,
    prev: string,
    next: string
  },
  meta: {
    current_page: number,
    from: number,
    last_page: number,
    links: {
      url: string,
      label: string,
      active: boolean
    }[],
    path: string,
    per_page: number,
    to: number,
    total: number
  }
}

function Index( {proposals, query} : {proposals: proposalData, query: string} ) {


  const formik = useFormik( {
    initialValues: {
      query: query ? query : '',
    },
    onSubmit: values => {
      router.post( route( 'admin.portfolios.search' ), values)
    },
  } );

  const [proposalData, setProposalData] = React.useState<ProposalType[]>(proposals.data)
  const [confirmedStatus, setConfirmedStatus] = React.useState<string>('')
  const [selectedProposal, setSelectedProposal] = React.useState<ProposalType | null>(null)
  const [showConfirmSheet, setShowConfirmSheet] = React.useState<boolean>(false)


  //changing the status of the proposal
  const changeStatus = (status: string, proposal: ProposalType) => {
    setConfirmedStatus(status)
    submitStatusChange(proposal)

  }


  //submitting the status change to the backend to update the status
  const submitStatusChange = (proposal: ProposalType) => {
    if (confirmedStatus === 'Sent') {
      axios.post(route('admin.proposals.update-status', proposal.hash_id), {status: confirmedStatus}).then((response) => {
        //find the proposal in the proposalData array and update the status
        let newProposals = proposalData.map((item) => {
          if (item.hash_id === proposal.hash_id) {
            return {...item, status: confirmedStatus}
          }
          return item
        })

        setProposalData(newProposals)
        setConfirmedStatus('')
      })
    }

    if (confirmedStatus === 'Confirmed') {
      setSelectedProposal(proposal)
    }
  }


  //confirming the selected portfolio and opening the confirmation portfolio slide
  const confirmingPortfolio = (proposal: ProposalType) => {
    setShowConfirmSheet(true)
    setSelectedProposal(proposal)
  }



//submitting the selected portfolio to the backend
  const submitProfileConfirmation = (portfolio: RateCardType) => {
    axios.post(route('admin.proposals.confirm-portfolio', selectedProposal?.hash_id), {portfolio_id: portfolio.id}).then((response) => {
      let newProposals = proposalData.map((proposal) => {
        if (proposal.hash_id === selectedProposal?.hash_id) {
          return {...proposal, confirmedPortfolio: portfolio}
        }
        return proposal
      })
      setProposalData(newProposals)
      setShowConfirmSheet(false)
    })
  }



  return (

    <AdminLayout>
      <Head title="Proposals" />

      <div className="">
        <div className="sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-gray-900">Proposals</h2>
            <form onSubmit={formik.handleSubmit} className="flex w-1/3 space-x-8 mb-8 mt-4">
              <Input type="search" name="query"
                     value={formik.values.query}
                     onChange={formik.handleChange}
                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              <Button type="submit">Search</Button>
            </form>
          </div>

          <div className="overflow-hidden sm:rounded-lg">
            <Table>
              <TableCaption>A list of your recent Proposals</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Responsible</TableHead>
                  <TableHead className="text-right">Speaker</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposalData.map((proposal) => (
                  <TableRow key={proposal.hash_id}>
                    <TableCell className="font-medium">
                      <Link href={route('admin.proposals.show', proposal.hash_id)}>{proposal.title}</Link>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className={`px-2 inline-flex text-sm leading-5 rounded
                      ${proposal.status === 'Accepted' && 'bg-green-50 text-green-800'}
                      ${proposal.status === 'Draft' && 'bg-blue-50 text-blue-800'}
                      `}
                        > {proposal.status}</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() => changeStatus('Sent', proposal)}

                          >Sent</DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => confirmingPortfolio(proposal)}
                          >Confirmed</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                    </TableCell>
                    <TableCell>{proposal.confirmedPortfolio?.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>

          </div>
        </div>
      </div>
      {
        selectedProposal && (
          <ConfirmPortfolioSlide
            isOpen={showConfirmSheet}
            setIsOpen={setShowConfirmSheet}
            updatedSelectedPortfolio={submitProfileConfirmation}
            portfolios={selectedProposal?.rateCards}
          />)
      }
    </AdminLayout>
  );
}

export default Index;
