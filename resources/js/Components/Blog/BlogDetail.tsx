interface BlogDetailProps {
    blog: {
        title: string;
        content: string;
        author: {
            id: number;
            name: string; // Updated from full_name to name
            slug: string;
            image: string;
        };
        // ... other properties
    };
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
    return (
        <div>
            <h1>{blog.title}</h1>
            <div className="author-section">
                <img src={blog.author.image} alt={blog.author.name} />
                <span>By {blog.author.name}</span> {/* Updated from full_name to name */}
            </div>
            {/* Rest of your component */}
        </div>
    );
};