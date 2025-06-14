export type ThemeVariants = 'light' | 'dark';

export interface UserSettings {
  theme: ThemeVariants;
  changeTheme: (theme: ThemeVariants) => void;
}
