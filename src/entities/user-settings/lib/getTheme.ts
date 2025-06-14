import { darkTheme, lightTheme } from '@/entities/user-settings';

import { ThemeVariants } from '../model/user-settings.store.types';

export const getTheme = (theme: ThemeVariants) => {
  if (theme === 'dark') return darkTheme;
  if (theme === 'light') return lightTheme;

  return lightTheme;
};
