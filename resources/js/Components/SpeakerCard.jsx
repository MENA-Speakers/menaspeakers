import React from 'react';
import stripTags from "@/Utils/stripTags";
import {Link} from "@inertiajs/react";

function SpeakerCard({speaker}) {
  return (
    <div className={'shadow-md'}>
      <Link href={route('speakers.show', speaker.slug)}>
        <img className={'w-full object-cover h-80'} src={speaker.image} alt={speaker.name} loading='lazy'/>
      </Link>
      <div className="p-4">
        <Link href={route('speakers.show', speaker.slug)} className={'font-semibold'}>{ stripTags(speaker.name)}</Link>
      </div>
    </div>
  );
}

export default SpeakerCard;
