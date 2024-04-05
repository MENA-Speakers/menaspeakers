import React from 'react';
import {Link, router} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import axios from "axios";



function AdminYoutubeVideo({ video, height = 200, width = 350 }) {
  const isVimeoVideo = /^\d+$/.test(video.url);

  const deleteVideo = () => {
    axios.post(route('admin.speakers.videos.destroy', video.id)).then((response) => {
      router.reload({only: ['']});
    });
  }
  return (
    <div>
      {!isVimeoVideo ? (
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${video.url}`}
        title=''
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>
) : (
      <iframe
        width={width}
        height={height}
        src={`https://player.vimeo.com/video/${video.url}`}
        title=''
        frameBorder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowFullScreen
      ></iframe>
)}
      {
        route().current('admin.speakers.*') && (
          <div className="w-full flex justify-end mt-2 px-6">
            <Button onClick={() => deleteVideo()} size={'sm'} variant={'destructive'} className={'text-sm py-2 px-3'} >Delete</Button>
          </div>
        )
      }
    </div>
  );
}

export default AdminYoutubeVideo;
