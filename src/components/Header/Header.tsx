import { Link } from 'react-router';

function Header() {
    const user = localStorage.getItem('user');
    const userData = user ? JSON.parse(user) : null;

    const userInitial = userData ? userData?.name?.charAt(0).toUpperCase() : '';

    return (
        <div className="dui-navbar bg-primary text-primary-content">
            <div className="flex-1">
                <Link
                    to={'/'}
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
                        <div className="w-10 rounded-full bg-primary-content text-primary flex justify-center items-center text-lg">
                            {userInitial}
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dui-menu dui-menu-sm dui-dropdown-content bg-primary text-primary-content dui-rounded-box z-1 mt-3 w-52 p-1 shadow"
                    >
                        <li className="hover:bg-base-100 hover:text-base-content rounded-xl ">
                            <Link to={'/user-profile'}>My Profile</Link>
                        </li>

                        <li className="hover:bg-base-100 hover:text-base-content rounded-xl">
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
