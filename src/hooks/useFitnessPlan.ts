import { useMutation } from '@tanstack/react-query';
import { api } from '../api/api';
import type { FitnessPlanParameters } from '../pages/Home';

export const useFitnessPlan = () => {
    return useMutation({
        mutationFn: (data: FitnessPlanParameters) =>
            api.post('/api/v1/FitnessPlan/generate', data),
        onSuccess: () => {
            console.log('Generation successful');
        },
        onError: (error) => {
            console.error('Generation failed', error);
        },
    });
};
