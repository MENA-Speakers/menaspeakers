import React from 'react';
import stripTags from "@/Utils/stripTags";
import {Link} from "@inertiajs/react";

function SpeakerCard({speaker}) {
  return (
    <div className={'shadow-md'}>
      <div className="overflow-hidden">
        <Link href={route('speakers.show', speaker.slug)} className={'overflow-hidden'}>
          <img className={'w-full object-cover h-80 transition duration-300 ease-in-out hover:scale-105'} src={speaker.image} alt={speaker.name} loading='lazy'/>
        </Link>
      </div>
      <div className="p-4">
        <Link href={route('speakers.show', speaker.slug)} className={'font-semibold'}>{ stripTags(speaker.name)}</Link>
      </div>
    </div>
  );
}

export default SpeakerCard;
