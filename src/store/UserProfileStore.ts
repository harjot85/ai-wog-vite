import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
    id: number;
    email: string;
    name: string;
    statistics?: UserStatistics;
}

export interface UserStatistics {
    dateOfBirth: string;
    weightInLbs: number;
    heightInInches: number;
    biologicalSex: string;
    experienceLevel?: string | null;
    profession?: string | null;
    chronicPhysicalLimitations?: string | null;
    medicalIssues?: string | null;
}

interface UserProfileState {
    userProfile: UserProfile | null;
    setUserProfile: (profile: UserProfile) => void;
    clearUserProfile: () => void;
}

export const useUserProfileStore = create<UserProfileState>()(
    persist(
        (set) => ({
            userProfile: null,
            setUserProfile: (profile) => set({ userProfile: profile }),
            clearUserProfile: () => set({ userProfile: null }),
        }),
        {
            name: 'userProfile-storage',
        }
    )
);
