import { SpeakerType } from "@/types/speaker-type";

export interface PublicTopicType {
  random_speaker_image: string | undefined;
  id: number,
  name: string,
  slug: string,
  speakers: SpeakerType[],
  speaker_count: number,
  image: string,
  created_at: string,
}
