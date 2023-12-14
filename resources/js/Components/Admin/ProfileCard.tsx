import React from 'react';
import {Link} from "@inertiajs/react";
import {ProfileType} from "@/types/admin-profiles";

//Speaker interface



function ProfileCard({profile} : {profile: ProfileType}) {
  return (
    <div className={ 'space-y-3'}>
      <div className="rounded-2xl overflow-hidden">
        <Link href={route('admin.profiles.show', profile.id)}>

          <img className={'object-cover rounded-2xl overflow-hidden h-[300px] w-full hover:scale-110 transition-all duration-500'} src={profile.image} alt={profile.full_name}/>
        </Link>
      </div>
      <div className={'px-2'}>
        <Link href={route('admin.profiles.show', profile.id)} className={'text-sm font-semibold'}>
          {profile.full_name}
        </Link>

      </div>
    </div>
  );
}

export default ProfileCard;
