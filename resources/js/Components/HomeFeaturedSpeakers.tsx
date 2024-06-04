import React from 'react';
import SpeakerCard from "@/Components/SpeakerCard";

function HomeFeaturedSpeakers() {
  return (
    <div className={'grid gap-12 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
    </div>
  );
}

export default HomeFeaturedSpeakers;
