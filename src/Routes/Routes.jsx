import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/JobDetails";
import AddJobs from "../Pages/AddJobs";
import ErrorPage from "../Pages/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />,

                // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`) for TabSection but Home section need just one section fetch data thats why we are used useEffect.
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/addJobs',
                element:<AddJobs/>
            },
            {
                path: '/myPostedJobs',
                element: <MyPostedJobs />
            },
            {
                path: '/update/:id',
                element: <UpdateJob />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
        ]
    },
]);

export default router;