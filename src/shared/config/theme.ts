import { DefaultTheme } from 'styled-components';

export const getAntdTheme = (theme: DefaultTheme) => {
  return {
    token: {
      colorPrimary: theme.colors.primary,
    },
    components: {
      Input: {
        colorBorder: theme.colors.primary,
        controlHeightLG: 50,
      },
      Button: {
        colorLink: theme.colors.primary,
        colorLinkHover: theme.colors.secondary,
        controlHeightLG: 50,
      },
    },
  };
};
