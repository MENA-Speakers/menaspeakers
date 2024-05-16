// Speaker interface


import {GalleryType, VideoType} from "@/types/media";

export interface ProfileType {
  id?: string;
  hash_id?: string;
  full_name?: string;
  first_name?: string;
  last_name?: string;
  location?: string;
  job_title?: string;
  website?: string;
  dob?: string;
  phone?: string;
  email?: string;
  twitter?: string;
  image?: string;
  linkedin: string;
  gallery:GalleryType[];
  videos?: VideoType[];
  fee: string;
  about: string;
}
