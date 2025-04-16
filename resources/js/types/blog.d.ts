interface BlogType {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image: string;
  published_at: string;
  author?: {
    id: number;
    name: string;
    slug: string;
    image: string;
    title?: string;
  };
  // ... other properties
}