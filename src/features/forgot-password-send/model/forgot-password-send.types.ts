import { SubmitHandler } from 'react-hook-form';

export interface ForgotPasswordSendForm {
  email: string;
}

export interface ForgotPasswordProps {
  onSubmit: SubmitHandler<ForgotPasswordSendForm>;
}
