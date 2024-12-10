//Blog type interface
interface BlogType {
    id: number;
    title: string;
    keywords: string;
    excerpt: string;
    meta_title: string;
    featured?: boolean
    slug: string;
    content: string;
    image: string;
    created_at: string;
    published_at: string;
    comments?: Comment[];
}
