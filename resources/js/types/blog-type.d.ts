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
  image: string;
};
