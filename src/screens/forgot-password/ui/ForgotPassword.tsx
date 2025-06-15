import React from 'react';

import { Logo } from '@/shared/components';
import { ForgotPassword as ForgotPasswordForm } from '@/widgets/forgot-password';

export const ForgotPassword = () => {
  return (
    <div className="relative h-dvh grid [grid-template-columns:2fr_1.5fr] items-center gap-30">
      <div className="absolute top-15 left-15 scale-125">
        <Logo />
      </div>
      <div className="bg-[url(/forgot-password.png)] bg-bottom bg-no-repeat bg-cover w-full h-full" />
      <ForgotPasswordForm />
    </div>
  );
};
