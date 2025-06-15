import { object, string } from 'yup';

import { SignInForm } from '../model/sign-in.types';

export const schema = object<SignInForm>()
  .shape({
    email: string().required('Email is required').email('Invalid email format'),
    password: string()
      .required('Password is required')
      .min(6, 'The password must be at least 6 characters long.'),
  })
  .required();
