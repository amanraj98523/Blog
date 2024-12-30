import { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const addBlog = (blog) => setBlogs([...blogs, { id: Date.now(), ...blog }]);
    const updateBlog = (id, updatedBlog) => {
        setBlogs(blogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
    };
    const deleteBlog = (id) => setBlogs(blogs.filter(blog => blog.id !== id));

    return (
        <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlogContext = () => useContext(BlogContext);
