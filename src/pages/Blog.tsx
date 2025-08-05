import { Helmet } from 'react-helmet';
import SingleBlog from '../components/SingleBlog';
import LoadingComponent from '../components/Loading';
import useBlogLoader from '../helper/hooks/useBlogLoader';
type BlogProps = {
    showAuthor?: boolean,
    showSimilarBlogs?: boolean,
    showFeedbackForm?: boolean,
    isAuthorView?: boolean
}
const Blog = ({ showAuthor = true, showSimilarBlogs = true, showFeedbackForm = true }: BlogProps) => {
    const { blog, loading } = useBlogLoader();
    if (loading || !blog) {
        return (
            <LoadingComponent message="Loading Blog..." minHeight="900px" width="100%" />
        );
    }
    return (
        <div>
            <Helmet>
                <title>{blog.title} - React Blog App</title>
                <meta name="keywords" content="react, blog, articles, posts" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/png" href="./src/assets/blog.png" />
                <title>React Blog App</title>
                <meta property="og:title" content="React Blog App" />
                <meta property="og:description" content="A full-stack blog platform built with React + Node.js + TypeScript." />
                <meta property="og:image" content="https://react-blog-app-frontend-psi.vercel.app/preview.jpg" />
                <meta property="og:url" content="https://react-blog-app-frontend-psi.vercel.app/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="React Blog App" />
                <meta name="twitter:description" content="A full-stack blog platform built with React + Node.js + TypeScript." />
                <meta name="twitter:image" content="https://react-blog-app-frontend-psi.vercel.app/preview.jpg" />
            </Helmet>
            <SingleBlog blog={blog} showAuthor={showAuthor} showFeedbackForm={showFeedbackForm}
                showSimilarBlogs={showSimilarBlogs} />
        </div>
    );
};

export default Blog;
