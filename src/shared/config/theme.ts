import { DefaultTheme } from 'styled-components';

export const getAntdTheme = (theme: DefaultTheme) => {
  return {
    token: {
      colorPrimary: theme.colors.primary,
    },
  };
};
