import { useMutation } from '@tanstack/react-query';
import { api } from '../api/api';

interface InsertProfileData {
    userId: number;
    dateOfBirth: string; // ISO date string
    weightInLbs: number;
    heightInInches: number;
    biologicalSex: string;
    experienceLevel?: string | null;
    profession?: string | null;
    chronicPhysicalLimitations?: string | null;
    medicalIssues?: string | null;
}

export const useInsertProfile = () => {
    return useMutation({
        mutationFn: (data: InsertProfileData) =>
            api.post('/api/v1/User/profile/insert', {
                UserId: data.userId,
                DateOfBirth: data.dateOfBirth,
                WeightInLbs: data.weightInLbs,
                HeightInInches: data.heightInInches,
                BiologicalSex: data.biologicalSex,
                ExperienceLevel: data.experienceLevel || null,
                Profession: data.profession || null,
                ChronicPhysicalLimitations:
                    data.chronicPhysicalLimitations || null,
                MedicalIssues: data.medicalIssues || null,
            }),
        onSuccess: (data) => {
            console.log('Profile inserted successfully', data);
        },
        onError: (error) => {
            console.error('Failed to insert profile', error);
        },
    });
};
