import { useState} from 'react'
import {Head, Link, router} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {ProfileType} from "@/types/admin-profiles";
import {VideoType} from "@/types/media";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {PortfolioType} from "@/types/portfolio-type";
import {ProposalType} from "@/types/proposal-type";
import {RateCardType} from "@/types/rate-card";

interface ShowProfileProps {
  profile: ProfileType,
  videos: VideoType[],
  portfolios: PortfolioType[],
  proposals: ProposalType[],
  rateCards: RateCardType[]
}


function ShowProfile({profile, videos, portfolios, proposals, rateCards}: ShowProfileProps) {

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [allVideos, setAllVideos] = useState(videos);


  return (
    <AdminLayout
    >
      <Head title="Speaker " />

      <AdminProfileHeader profile={profile} />

      <div className="py-12">
        <div dangerouslySetInnerHTML={{__html: profile.about}} className="max-w-7xl mx-auto sm:p-6 lg:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        </div>
      </div>


    </AdminLayout>
  );
}

export default ShowProfile;
