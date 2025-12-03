import { createBrowserRouter } from 'react-router';
import RootLayout from '../components/Layout/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UserProfile from '../components/User/UserProfile';
import UserRegistration from '../components/Auth/UserRegistration';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <UserRegistration />,
    },
    {
        element: <RootLayout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/user-profile',
                element: <UserProfile />,
            },
        ],
    },
]);

export default router;
