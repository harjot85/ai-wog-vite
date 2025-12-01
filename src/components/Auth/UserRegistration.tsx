import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import type { UserRegistration as UserRegistrationType } from '../../types/user';
import { useRegistration } from '../../hooks/useRegistration';

const UserRegistration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegistrationType>();

    const { mutate: registerUser } = useRegistration();

    const onSubmit = (data: UserRegistrationType) => {
        console.log(data);
        registerUser(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 p-10">
            <div className="card w-full max-w-xl bg-base-100 p-10 outline-1 outline-primary-content shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-6 text-center">
                        Sign Up
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div className="form-control">
                            <label className="dui-label p-1">
                                <span className="dui-label-text text-lg">
                                    Full Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="dui-input dui-input-lg dui-input-bordered w-full"
                                {...register('fullName', {
                                    required: 'Full name is required',
                                    minLength: {
                                        value: 2,
                                        message:
                                            'Full name must be at least 2 characters',
                                    },
                                })}
                            />
                            {errors.fullName && (
                                <label className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.fullName.message}
                                    </span>
                                </label>
                            )}
                        </div>

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
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <label className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.email.message}
                                    </span>
                                </label>
                            )}
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
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 8,
                                        message:
                                            'Password must be at least 8 characters',
                                    },
                                })}
                            />
                            {errors.password && (
                                <label className="label">
                                    <span className="label-text-alt text-error">
                                        {errors.password.message}
                                    </span>
                                </label>
                            )}
                        </div>

                        <div className="form-control mt-10">
                            <button
                                type="submit"
                                className="dui-btn dui-btn-primary w-full"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="divider divider-primary text-center mt-5">
                        OR
                    </div>

                    <div className="text-center space-y-2">
                        <div className="text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="link link-primary">
                                Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegistration;
