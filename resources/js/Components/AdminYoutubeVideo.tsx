import React from 'react';
import { Link } from "@inertiajs/react";

function AdminYoutubeVideo({ video, height = 200, width = 350 }) {
  const isVimeoVideo = /^\d+$/.test(video.url);
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
            <Link href={route('admin.speakers.videos.destroy', video.id)} method="post" className={'text-sm text-red-600 py-1.5'} >Delete</Link>
          </div>
        )
      }
    </div>
  );
}

export default AdminYoutubeVideo;
