import React from 'react';
import {Link} from "@inertiajs/react";
import {ProfileType} from "@/types/admin_profiles";

//Speaker interface



function SpeakerCard({speaker} : {speaker: ProfileType}) {
  return (
    <div className={ 'space-y-3'}>
     <div className="rounded-2xl overflow-hidden">
       <Link href={route('admin.profiles.show', speaker.slug)}>

         <img className={'object-cover rounded-2xl overflow-hidden h-[400px] w-full hover:scale-110 transition-all duration-500'} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={speaker.full_name}/>
       </Link>
     </div>
      <div className={'px-2'}>
        <Link href={route('admin.profiles.show', speaker.slug)} className={'text-sm font-semibold'}>
          Joshua Fomubod
        </Link>
        <p className={'text-xs text-gray-500'}>
          CEO, Vivastate
        </p>
      </div>
    </div>
  );
}

export default SpeakerCard;
