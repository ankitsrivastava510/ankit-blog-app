import {
    createBrowserRouter,
} from "react-router-dom";
import Home from './components/Home/home'
import AddBlog from "./features/blog/AddBlog/addBlog";
import BlogList from "./features/blog/AllBlog/blogList";
import SingleBlog from "./features/blog/SingleBlog/singleBlog";
import EditBlog from "./features/blog/EditBlog/editBlog";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                path: '',
                element: <BlogList />,
            },
            {
                path: "new-post",
                element: <AddBlog />
            },
            {
                path: "edit-post/:id",
                element: <EditBlog />
            },
            {
                path: ":id",
                element: <SingleBlog /> 
            }
        ]
    },
]);

export default router