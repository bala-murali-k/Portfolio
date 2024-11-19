import { create } from 'zustand';

export const useTheme = create((set) => ({
	theme: 'Dark',
	handleChangeTheme: () => set((state) => ({ theme: state.theme === 'Dark' ? 'Light' : 'Dark' })),
}));
