import { ROUTES } from '@/shared/config';

export const getUrl = (path: keyof typeof ROUTES) => {
  switch (path) {
    case ROUTES.FORGOT_PASSWORD:
      return './forgot-password.png';
    case ROUTES.LOGIN:
      return './login.png';
    case ROUTES.REGISTRATION:
      return './registration.png';
    default:
      return './login.png';
  }
};
