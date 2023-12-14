import React from 'react';
import {Link} from "@inertiajs/react";
import {SpeakerType} from "@/types/speaker-type";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/Components/ui/dropdown-menu";
import {MoreVertical} from "lucide-react";

//Speaker interface



function SpeakerCard({speaker} : {speaker: SpeakerType}) {
  return (
    <div className={ 'space-y-3'}>
     <div className="rounded-2xl overflow-hidden">
       <Link href={route('admin.speakers.show', speaker.slug)}>

         <img className={'object-cover rounded-2xl overflow-hidden h-[300px] w-full hover:scale-110 transition-all duration-500'} src={speaker.image} alt={speaker.full_name}/>
       </Link>
     </div>
      <div className={'px-2 flex justify-between items-center'}>
        <Link href={route('admin.speakers.show', speaker.slug)} className={'text-sm font-semibold'}>
          {speaker.name}
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical className={'w-5 h-5 text-gray-500'}/>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={route('admin.speakers.edit', speaker.slug)}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>

            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  );
}

export default SpeakerCard;
