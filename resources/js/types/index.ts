export interface Author {
    id: number;
    name: string; // Updated from full_name to name
    slug: string;
    image: string;
}

export interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featured: boolean;
    image: string;
    author: Author;
    categories: Category[];
    published_at: string;
}

export interface BlogFormData {
    title: string;
    content: string;
    excerpt: string;
    featured: boolean;
    image?: File | null;
    author: {
        value: number;
        label: string;
    } | null;
    categories: {
        value: number;
        label: string;
    }[];
}

