import { useState } from 'react';
import { useNavigate } from 'react-router';

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        navigate('/fitness-plan');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-6">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="dui-label">
                                <span className="dui-label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="dui-input dui-input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="dui-label">
                                <span className="dui-label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="dui-input dui-input-bordered w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="dui-btn dui-btn-primary w-full"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div className="text-center space-y-2">
                        <a href="#" className="link link-primary text-sm">
                            Forgot password?
                        </a>
                        <div className="text-sm">
                            Don't have an account?{' '}
                            <a href="#" className="link link-primary">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;
