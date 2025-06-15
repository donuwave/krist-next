import React from 'react';

import { Logo } from '@/shared/components';
import { SignUp } from '@/widgets/sign-up';

export const Registration = () => {
  return (
    <div className="relative h-dvh grid [grid-template-columns:2fr_1.5fr] items-center gap-30">
      <div className="absolute top-15 left-15 scale-125">
        <Logo />
      </div>
      <div className="bg-[url(/registration.png)] bg-top bg-no-repeat bg-cover w-full h-full" />
      <SignUp />
    </div>
  );
};
