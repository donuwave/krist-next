import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#1890ff',
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: '#000000',
    text: '#ffffff',
    primary: '#00b96b',
  },
};

export const getStylesTheme = (themeName: DefaultTheme['name']) => {
  switch (themeName) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};
