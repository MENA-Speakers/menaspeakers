import React, {useState} from 'react'
import {Head} from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import {ProfileType} from "@/types/admin-profiles";
import AdminProfileHeader from "@/Components/Admin/AdminProfileHeader";
import {PortfolioType} from "@/types/portfolio-type";
import {ProposalType} from "@/types/proposal-type";
import {RateCardType} from "@/types/rate-card";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import {Button} from "@/Components/ui/button";
import AddVideoLink from "@/Components/AddVideoLink";

/**
 * Represents the properties required to display a user profile.
 *
 * @interface ShowProfileProps
 *
 * @property {ProfileType} profile - The profile details of the user.
 * @property {VideoLinks[]} videos - An array of video links associated with the user.
 * @property {PortfolioType[]} portfolios - A collection of portfolio entries for the user.
 * @property {ProposalType[]} proposals - A set of proposals related to the user.
 * @property {RateCardType[]} rateCards - A list of rate cards associated with the user and their services.
 */
interface ShowProfileProps {
  profile: ProfileType,
  videos: VideoLinks[],
  portfolios: PortfolioType[],
  proposals: ProposalType[],
  rateCards: RateCardType[]
}


/**
 * Displays the profile and its associated videos in an administrative layout.
 * Provides functionality to add video links to the profile.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.profile - The profile data to display, containing details such as the profile's ID.
 * @param {Array} props.videos - A list of video objects, where each video contains a link.
 * @return {JSX.Element} The rendered profile display component.
 */
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
