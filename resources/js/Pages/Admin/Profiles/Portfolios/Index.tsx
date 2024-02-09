import React from 'react';
import {PortfolioType} from "@/types/portfolio-type";
import {ProfileType} from "@/types/admin-profiles";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head, Link} from "@inertiajs/react";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {PortfolioCard} from "@/Components/Admin/PortfolioCard";


interface ShowPortfoliosProps {
  portfolios: PortfolioType[],
  profile: ProfileType
}
function ShowPortfolios({portfolios, profile} : ShowPortfoliosProps) {
  return (
    <AdminLayout
    >
      <Head title="Speaker Portfolios " />

      <AdminProfileHeader profile={profile} />

      <div className="py-4">
        <div className="flex py-4 justify-between items-center">
          <h2 className="text-lg ">Portfolios</h2>
          <div className="flex items-center">
            <Link
              href={route('admin.portfolios.create')}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm hover:bg-slate-50 transition duration-150 ease-in-out  border  rounded-md  focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              New Portfolio
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">

          {
            portfolios.map((portfolio: PortfolioType, index: number) => (
              <PortfolioCard key={index} portfolio={portfolio}/>
            ))
          }

        </div>
      </div>


    </AdminLayout>
  );
}

export default ShowPortfolios;
