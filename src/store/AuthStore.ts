import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useUserProfileStore } from './UserProfileStore';

interface User {
    userId: number;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;

    // Actions
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: (user) =>
                set({
                    user,
                    isAuthenticated: true,
                }),

            logout: () => {
                useUserProfileStore.getState().clearUserProfile();
                set({
                    user: null,
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);
