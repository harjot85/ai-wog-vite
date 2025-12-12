import { useMutation } from '@tanstack/react-query';
import { api } from '../api/api';
import type { FitnessPlanParameters } from '../pages/Home';

interface UserFitnessPlanParameters {
    userId: number;
    fitnessParameters: FitnessPlanParameters;
}

export const useFitnessPlan = () => {
    return useMutation({
        mutationFn: (data: UserFitnessPlanParameters) =>
            api.post('/api/v1/FitnessPlan/generate', data),
        onSuccess: (response) => {
            console.log('Generation successful. Response:', response);
        },
        onError: (error) => {
            console.error('Generation failed', error);
        },
    });
};
