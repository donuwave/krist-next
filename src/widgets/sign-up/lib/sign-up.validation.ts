import { object, string } from 'yup';

import { SignUpForm } from '../model/sign-up.types';

export const schema = object<SignUpForm>().shape({
  firstName: string()
    .required('firstName is required')
    .min(3, 'The firstName must be at least 3 characters long'),
  lastName: string()
    .required('lastName is required')
    .min(3, 'The lastName must be at least 3 characters long'),
  email: string().required('Email is required').email('Invalid email format'),
  password: string()
    .required('Password is required')
    .min(6, 'The password must be at least 6 characters long'),
});
