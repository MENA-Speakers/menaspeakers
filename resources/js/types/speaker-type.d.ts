//Speaker interface


import {PortfolioType} from "@/types/portfolio-type";

export interface SpeakerType {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  portfolios: PortfolioType[];
  meta_title: string;
  meta_description: string;
  bio: string;
  excerpt: string;
  keywords: string;
  location_id: number;
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
