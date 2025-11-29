import { createBrowserRouter } from 'react-router';
import RootLayout from '../components/Layout/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UserProfile from '../components/User/UserProfile';

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        element: <RootLayout />,
        children: [
            {
                // temporary
                path: '/',
                //path: "/fitness-plan",
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
