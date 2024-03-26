import React, {Fragment, useRef, useState} from 'react'
import {Head, Link, router} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {ProfileType} from "@/types/admin-profiles";
import {VideoType} from "@/types/media";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {PortfolioType} from "@/types/portfolio-type";
import {ProposalType} from "@/types/proposal-type";
import {RateCardType} from "@/types/rate-card";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import {Button} from "@/Components/ui/button";
import {Dialog, Transition} from '@headlessui/react';
import {CheckIcon} from "lucide-react";
import AddVideoLink from "@/Components/AddVideoLink";

interface ShowProfileProps {
  profile: ProfileType,
  videos: VideoLinks[],
  portfolios: PortfolioType[],
  proposals: ProposalType[],
  rateCards: RateCardType[]
}


function ShowProfile({profile, videos}: ShowProfileProps) {

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [allVideos, setAllVideos] = useState(videos)


  const handleLinkAdded = (link: VideoLinks) => {
    let newVideos = [...allVideos, {link: link}]
    setAllVideos(newVideos)
  }


  return (
    <AdminLayout
    >
      <Head title="Profile Videos" />

      <AdminProfileHeader profile={profile} />

      <div className="py-12 flex justify-between items-center">
        <h2 className="text-2xl text-gray-900">Videos</h2>
        <Button onClick={() => setOpen(true)} className="bg-mena-300 text-white px-4 py-2 rounded-md hover:bg-mena-400">
          Add Video
        </Button>
      </div>
      <div className="py-4">
        <Table>
          <TableCaption>A list of video links</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.map((video) => (
              <TableRow key={video.link}>
                <TableCell className="font-medium">{video.link}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddVideoLink
        isOpen={open}
        setIsOpen={setOpen}
        handleLinkAdded={handleLinkAdded}
       id={profile.id}/>
    </AdminLayout>
  );
}

export default ShowProfile;
