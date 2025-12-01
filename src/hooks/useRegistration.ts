import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { api } from '../api/api';

interface RegistrationData {
    email: string;
    password: string;
}

export const useRegistration = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: RegistrationData) =>
            api.post('/api/v1/auth/register', data),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            navigate('/login');
        },
    });
};
