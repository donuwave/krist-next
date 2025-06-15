import { SubmitHandler } from 'react-hook-form';

export interface ForgotPasswordEnterForm {
  otp: string;
}

export interface ForgotPasswordEnterProps {
  onSubmit: SubmitHandler<ForgotPasswordEnterForm>;
  onBack: () => void;
}
