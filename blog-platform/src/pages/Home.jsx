import BlogForm from '../components/BlogForm';
import BlogList from '../components/BlogList';

const Home = () => {
    return (
        <div>
            <h1>Blog Platform</h1>
            <BlogForm />
            <BlogList />
        </div>
    );
};

export default Home;
