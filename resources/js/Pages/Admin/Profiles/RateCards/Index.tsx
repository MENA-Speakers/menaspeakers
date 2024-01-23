import React from 'react';
import {ProfileType} from "@/types/admin-profiles";
import AdminLayout from "@/Layouts/AdminLayout";
import {Head} from "@inertiajs/react";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {RateCardType} from "@/types/rate-card";


interface ShowSpeakerRateCardProps {
  rateCards: RateCardType[],
  profile: ProfileType
}
function ShowSpeakerRateCard({rateCards, profile} : ShowSpeakerRateCardProps) {

  return (
    <AdminLayout
    >
      <Head title="Speaker Rate Cards " />

      <AdminProfileHeader profile={profile} />

      <div className="py-4">

        <div className="">

          {/*{*/}
          {/*  rateCards.map((proposal, index: number) => (*/}
          {/*    <PortfolioCard proposal={proposal} key={index} />*/}
          {/*  ))*/}
          {/*}*/}

          <div className="overflow-hidden sm:rounded-lg">

          </div>


        </div>
      </div>


    </AdminLayout>
  );
}

export default ShowSpeakerRateCard;
