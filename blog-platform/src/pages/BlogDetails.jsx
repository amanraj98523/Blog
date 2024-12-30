import { useParams, useNavigate } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import { useState } from 'react';

const BlogDetails = () => {
    const { id } = useParams();
    const { blogs, updateBlog } = useBlogContext();
    const blog = blogs.find((b) => b.id === parseInt(id));
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateBlog(blog.id, { title, content });
        setIsEditing(false);
    };

    if (!blog) return <p>Blog not found!</p>;

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

export default BlogDetails;
