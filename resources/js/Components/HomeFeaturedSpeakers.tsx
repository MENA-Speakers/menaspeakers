import React from 'react';
import SpeakerCard from "@/Components/SpeakerCard";
import {SpeakerType} from "@/types/speaker-type";

interface HomeFeaturedSpeakersProps {
  speakers: SpeakerType[]
}

function HomeFeaturedSpeakers({speakers}: HomeFeaturedSpeakersProps) {

  return (
    <div className={'grid gap-12 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
      {
        speakers?.map(speaker => (
          <SpeakerCard speaker={speaker} key={speaker.id}/>
        ))
      }
    </div>
  );
}

export default HomeFeaturedSpeakers;
