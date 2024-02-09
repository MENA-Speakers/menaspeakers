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

  console.log(proposals)

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
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {proposals.data.map((proposal) => (
                  <TableRow key={proposal.hash_id}>
                    <TableCell className="font-medium">
                      <Link href={route('admin.proposals.show', proposal.hash_id)}>{proposal.title}</Link>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 inline-flex text-sm leading-5 rounded
                      ${proposal.status === 'Accepted' && 'bg-green-50 text-green-800'}
                      ${proposal.status === 'Draft' && 'bg-blue-50 text-blue-800'}
                      `}>
                        {proposal.status}
                      </span>
                    </TableCell>
                    <TableCell>{proposal.paymentMethod}</TableCell>
                    <TableCell className="text-right">{proposal.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Index;
