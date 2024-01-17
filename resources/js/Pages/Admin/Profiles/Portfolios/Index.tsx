import React from 'react';
import {PortfolioType} from "@/types/portfolio-type";
import {ProfileType} from "@/types/admin-profiles";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head} from "@inertiajs/react";
import AdminSpeakerHeader from "@/Components/Admin/AdminSpeakerHeader";


interface ShowPortfoliosProps {
  portfolios: PortfolioType[],
  profile: ProfileType
}
function ShowPortfolios({portfolios, profile} : ShowPortfoliosProps) {
  return (
    <AdminLayout
    >
      <Head title="Speaker Portfolios " />

      <AdminSpeakerHeader profile={profile} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:p-6 lg:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        </div>
      </div>


    </AdminLayout>
  );
}

export default ShowPortfolios;
