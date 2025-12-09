import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { api } from '../api/api';
import { useUserProfileStore } from '../store/UserProfileStore';

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

export const useUserProfile = () => {
    const navigate = useNavigate();
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

    return useMutation({
        mutationFn: (userId: number) =>
            api.get(`/api/v1/user/${userId}/profile`),
        onSuccess: (data: User) => {
            console.log('User profile fetched successfully', data);
            setUserProfile(data);
            navigate('/home');
        },
        onError: (error) => {
            console.error('Error fetching user profile', error);
        },
    });
};
