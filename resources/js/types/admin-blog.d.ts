//Blog type interface
import {CategoryType} from "@/types/speaker-type";

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
    categories: CategoryType[];
}
