import { create } from 'zustand';

interface AppStore {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));