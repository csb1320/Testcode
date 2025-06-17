import { create } from "zustand";

type AuthStore = {
  user: { id: number; name: string } | null;
  login: (user: { id: number; name: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
