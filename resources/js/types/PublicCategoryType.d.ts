import {SpeakerType} from "@/types/speaker-type";

export interface PublicCategoryType {
  id: number,
  name: string,
  slug: string,
  speakers: SpeakerType[],
  speaker_count: number,
  image: string,
  created_at: string,
  children: PublicCategoryType[]
}
