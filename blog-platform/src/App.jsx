import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';

function App() {
    return (
        <BlogProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                </Routes>
            </Router>
        </BlogProvider>
    );
}

export default App;
