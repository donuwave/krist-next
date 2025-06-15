import { object, string } from 'yup';

import { SignInForm } from '../model/sign-in.types';

export const schema = object<SignInForm>()
  .shape({
    email: string().required('Email обязателен').email('Неверный формат email'),
    password: string()
      .required('Пароль обязателен')
      .min(6, 'Пароль должен быть не менее 6 символов'),
  })
  .required();
