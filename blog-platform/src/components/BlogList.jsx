import { Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';

const BlogList = () => {
    const { blogs, deleteBlog } = useBlogContext();

    return (
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content.slice(0, 100)}...</p>
                    <Link to={`/blog/${blog.id}`}>Read More</Link>
                    <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
