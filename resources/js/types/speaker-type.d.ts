//Speaker interface


import {PortfolioType} from "@/types/portfolio-type";
import {FaqType} from "@/types/faq-type";
import {VideoType} from "@/types/video-type";



export interface SpeakerType {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  title: string;
  portfolios: PortfolioType[];
  meta_title: string;
  meta_description: string;
  bio: string;
  tags: string[];
  categories: string[];
  excerpt: string;
  faqs: FaqType[];
  keywords: string;
  location_id: number;
  videos: VideoType[];
  name: string;
  slug: string;
  company: string;
  position: string;
  about: string;
  featured: boolean;
  image: string;
  created_at: string;
  updated_at: string;
}
