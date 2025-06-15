import { object, string } from 'yup';

import { ForgotPasswordSendForm } from '../model/forgot-password-send.types';

export const schema = object<ForgotPasswordSendForm>()
  .shape({
    email: string().required('Email is required').email('Invalid email format'),
  })
  .required();
