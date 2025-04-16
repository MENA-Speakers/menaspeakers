export interface Author {
    id: number;
    name: string;
    slug: string;
    image: string;
}

export interface SelectOption {
    value: number;
    label: string;
}

export interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featured: boolean;
    image: string;
    author: Author | null;
    categories: CategoryType[];
    published_at: string;
}

export interface BlogFormData {
    title: string;
    content: string;
    excerpt: string;
    featured: boolean;
    image?: File | null;
    author: SelectOption | null;
    categories: SelectOption[];
}



