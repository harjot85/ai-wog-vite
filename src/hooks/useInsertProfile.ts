import { useMutation } from '@tanstack/react-query';
import { api } from '../api/api';
import { useUserProfileStore } from '../store/UserProfileStore';

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
    const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

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
        onSuccess: (responseData, variables) => {
            console.log('Profile inserted successfully', responseData);

            // Update existing profile with new statistics
            const currentProfile = useUserProfileStore.getState().userProfile;
            if (currentProfile) {
                setUserProfile({
                    ...currentProfile,
                    statistics: responseData?.statistics || {
                        dateOfBirth: variables.dateOfBirth,
                        weightInLbs: variables.weightInLbs,
                        heightInInches: variables.heightInInches,
                        biologicalSex: variables.biologicalSex,
                        experienceLevel: variables.experienceLevel || null,
                        profession: variables.profession || null,
                        chronicPhysicalLimitations:
                            variables.chronicPhysicalLimitations || null,
                        medicalIssues: variables.medicalIssues || null,
                    },
                });
            }
        },
        onError: (error) => {
            console.error('Failed to insert profile', error);
        },
    });
};
