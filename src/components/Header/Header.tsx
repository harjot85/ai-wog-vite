import { Link, useNavigate } from 'react-router';
import { useAuthStore } from '../../store/AuthStore';
import { useUserProfileStore } from '../../store/UserProfileStore';

function Header() {
    const userProfile = useUserProfileStore((state) => state.userProfile);

    const userInitial = userProfile?.name?.charAt(0).toUpperCase();

    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="dui-navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link
                    to={'/home'}
                    className="dui-btn dui-btn-ghost text-xl hover:bg-base-100 p-6"
                >
                    AI Powered Fitness Coach
                </Link>
            </div>
            <div className="flex-none">
                <div className="dui-dropdown dui-dropdown-end ">
                    <div
                        tabIndex={0}
                        role="button"
                        className="dui-btn dui-btn-ghost dui-btn-circle dui-avatar "
                    >
                        <div className="w-10 rounded-full bg-primary-content text-primary text-lg flex justify-center items-center ">
                            {userInitial}
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dui-menu dui-menu-sm dui-dropdown-content bg-primary text-primary-content dui-rounded-none z-1 mt-3 w-52 p-1 shadow text-2xl"
                    >
                        <li className="hover:bg-base-100 hover:text-base-content rounded-none">
                            <Link to={'/user-profile'} className="text-lg">
                                My Profile
                            </Link>
                        </li>

                        <li className="hover:bg-base-100 hover:text-base-content rounded-none">
                            <Link
                                to={'/login'}
                                className="text-lg"
                                onClick={handleLogout}
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
