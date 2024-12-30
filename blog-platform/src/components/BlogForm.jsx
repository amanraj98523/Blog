import { useState } from 'react';
import { useBlogContext } from '../context/BlogContext';

const BlogForm = () => {
    const { addBlog } = useBlogContext();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Add Blog</button>
        </form>
    );
};

export default BlogForm;
