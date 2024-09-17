import React from 'react';
import SpeakerCard from "@/Components/SpeakerCard";
import {SpeakerType} from "@/types/speaker-type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface HomeFeaturedSpeakersProps {
  speakers: SpeakerType[]
}

function HomeFeaturedSpeakers({speakers}: HomeFeaturedSpeakersProps) {

  return (
    <div className={'py-6'}>

      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className={'-ml-4'}>

          {
            speakers?.map(speaker => (
              <CarouselItem key={speaker.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                 <SpeakerCard speaker={speaker} />
              </CarouselItem>
            ))
          }


        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HomeFeaturedSpeakers;
