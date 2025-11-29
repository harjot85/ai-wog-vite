import { Outlet, useLocation } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const RootLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <div className="min-h-screen flex flex-col">
            {!isLoginPage && <Header />}
            <main className="grow my-14">
                <Outlet />
            </main>
            {!isLoginPage && <Footer />}
        </div>
    );
};

export default RootLayout;
