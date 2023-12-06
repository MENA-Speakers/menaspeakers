import React from 'react';
import {Link} from "@inertiajs/react";
import {ProfileType} from "@/types/admin_profiles";

//Speaker interface



function SpeakerCard({speaker} : {speaker: ProfileType}) {
  return (
    <div className={ 'space-y-3'}>
     <div className="rounded-2xl overflow-hidden">
       <Link href={route('admin.profiles.show', speaker.slug)}>

         <img className={'object-cover rounded-2xl overflow-hidden h-[400px] w-full hover:scale-110 transition-all duration-500'} src={speaker.image} alt={speaker.full_name}/>
       </Link>
     </div>
      <div className={'px-2'}>
        <Link href={route('admin.profiles.show', speaker.slug)} className={'text-sm font-semibold'}>
          {speaker.name}
        </Link>

      </div>
    </div>
  );
}

export default SpeakerCard;
