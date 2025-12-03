import { useState } from 'react';
import { Link } from 'react-router';
import { useUserLogin } from '../../hooks/useUserLogin';
import { toast } from 'react-toastify';

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { mutate: loginUser, isPending } = useUserLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        loginUser(
            { email, password },
            {
                onSuccess: () => {
                    console.log('Login successful');
                },
                onError: (error) => {
                    console.error('Login failed', error);
                    toast.error('Login failed');
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 p-10">
            <div className="card w-full max-w-xl bg-base-100 p-10 outline-1 outline-primary-content shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-6 text-center">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="dui-label p-1">
                                <span className="dui-label-text text-lg">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="dui-input dui-input-lg dui-input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="dui-label p-1">
                                <span className="dui-label-text text-lg">
                                    Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="dui-input dui-input-lg dui-input-bordered w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control mt-10">
                            <button
                                type="submit"
                                className="dui-btn dui-btn-primary w-full"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="divider divider-primary text-center mt-5">
                        OR
                    </div>

                    <div className="text-center space-y-2">
                        <a href="#" className="link link-primary text-sm">
                            Forgot password?
                        </a>
                        <div className="text-sm">
                            Don't have an account?{' '}
                            <Link to="/register" className="link link-primary">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
