import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { api } from '../api/api';

interface userLoginRequest {
    email: string;
    password: string;
}

interface User {
    id: number;
    email: string;
    name: string;
    userStatistics?: UserStatistics;
}

export interface UserStatistics {
    userId: number;
    heightInInches: number | null;
    weightInPounds: number | null;
    gender: string | null;
    dateOfBirth: string | null;
    createdAt: string;
    updatedAt: string;
}

export const useUserLogin = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: userLoginRequest) =>
            api.post('/api/v1/auth/login', data),
        onSuccess: (data: User) => {
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/home');
        },
    });
};
