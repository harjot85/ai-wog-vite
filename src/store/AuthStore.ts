import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useUserProfileStore } from './UserProfileStore';
import type { LoginResponse } from '../hooks/useUserLogin';

interface AuthState {
    user: LoginResponse | null;
    isAuthenticated: boolean;

    // Actions
    login: (user: LoginResponse) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: (user) =>
                set({
                    user: user as LoginResponse,
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
