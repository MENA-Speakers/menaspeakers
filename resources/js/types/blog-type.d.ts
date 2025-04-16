import { CategoryType } from "@/types/speaker-type";

export type BlogType = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  meta_title?: string;
  meta_description?: string;
  keywords?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: string;
  categories: CategoryType[];
  featured: boolean;
  authorId: number;
  author?: {
    id: number;
    full_name: string;
    slug: string;
    image: string;
    title?: string;
  };
};
