import { object, string } from 'yup';

import { ForgotPasswordEnterForm } from '../model/forgot-password-enter.types';

export const schema = object<ForgotPasswordEnterForm>()
  .shape({
    otp: string().required('Otp is required').min(6, 'The Otp must be at least 6 characters long.'),
  })
  .required();
