//Speaker interface


import {PortfolioType} from "@/types/portfolio-type";
import {FaqType} from "@/types/faq-type";
import {VideoType} from "@/types/video-type";

export interface TagType {
  id: number;
  name: string;
}

export interface CategoryType {
  id: number;
  image: string;
  slug: string;
  name: string;
}

export interface SpeakerType {
  id: number;
  first_name: string;
  last_name: string;
  title: string;
  full_name: string;
  key_titles: string[];
  meta_title: string;
  meta_description: string;
  bio: string;
  topics: CategoryType[];
  categories: CategoryType[];
  excerpt: string;
  faqs: FaqType[];
  location_id: number;
  videos: VideoType[];
  name: string;
  slug: string;
  about: string;
  featured: boolean;
  image: string;
  created_at: string;
  updated_at: string;
}
