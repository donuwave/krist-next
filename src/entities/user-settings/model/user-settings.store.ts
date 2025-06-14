import { create } from 'zustand/react';

import { ThemeVariants, UserSettings } from './user-settings.store.types';

export const useUserSettings = create<UserSettings>((set) => ({
  theme: 'light',
  changeTheme: (theme: ThemeVariants) => set(() => ({ theme })),
}));
