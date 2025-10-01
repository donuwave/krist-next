import { ThemeVariants } from '@/entities/global-settings';

interface GetUrlImgArgs {
  theme: ThemeVariants;
  isInverted: boolean;
}

export const getUrlImg = ({ theme, isInverted }: GetUrlImgArgs) => {
  const darkImgUrl = '/logo-light.jpg';
  const lightImgUrl = '/logo.png';

  if (isInverted) {
    return theme === 'dark' ? lightImgUrl : darkImgUrl;
  } else {
    return theme === 'light' ? lightImgUrl : darkImgUrl;
  }
};
