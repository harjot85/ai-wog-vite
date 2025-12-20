import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { api } from '../api/api';
import { useAuthStore } from '../store/AuthStore';

interface userLoginRequest {
    email: string;
    password: string;
}

interface UserDto {
    email: string;
    fullName: string;
    id: number;
}
export interface LoginResponse {
    user: UserDto;
    token: string;
    expiryInMinutes: number;
}
export const useUserLogin = () => {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    return useMutation({
        mutationFn: (data: userLoginRequest) =>
            api.post('/api/v1/auth/login', data),
        onSuccess: (data: LoginResponse) => {
            login(data as LoginResponse);
            navigate('/home');
        },
    });
};
