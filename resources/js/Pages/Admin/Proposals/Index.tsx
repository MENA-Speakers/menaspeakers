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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  return (

    <AdminLayout>
      <Head title="Speaker" />

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
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
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
