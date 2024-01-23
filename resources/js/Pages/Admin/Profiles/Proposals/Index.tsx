import React from 'react';
import {PortfolioType} from "@/types/portfolio-type";
import {ProfileType} from "@/types/admin-profiles";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link} from "@inertiajs/react";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {PortfolioCard} from "@/Components/Admin/PortfolioCard";
import {ProposalType} from "@/types/proposal-type";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";


interface ShowProfileProposalProps {
  proposals: ProposalType[],
  profile: ProfileType
}
function ShowProfileProposal({proposals, profile} : ShowProfileProposalProps) {
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
    <AdminLayout
    >
      <Head title="Speaker Portfolios " />

      <AdminProfileHeader profile={profile} />

      <div className="py-4">

        <div className="">

          {/*{*/}
          {/*  proposals.map((proposal, index: number) => (*/}
          {/*    <PortfolioCard proposal={proposal} key={index} />*/}
          {/*  ))*/}
          {/*}*/}

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

export default ShowProfileProposal;
