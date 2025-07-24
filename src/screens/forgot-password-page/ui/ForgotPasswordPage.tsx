'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { useStage } from '@/entities/auth';
import { ArrowLeft } from '@/shared/assets';
import { ForgotPasswordEmail } from '@/widgets/forgot-password-email';
import { ForgotPasswordOtp } from '@/widgets/forgot-password-otp';

import { SBackButton, SForgotPage } from './forgotPasswordPage.styles';

export const ForgotPasswordPage = () => {
  const router = useRouter();
  const { stage, setStage } = useStage();

  const handleBack = () => {
    if (stage === 'email') {
      router.back();
    } else {
      setStage('email');
    }
  };

  return (
    <SForgotPage>
      <SBackButton onClick={handleBack} icon={<ArrowLeft />} iconPosition="start" type="link">
        Back
      </SBackButton>

      {stage === 'email' && <ForgotPasswordEmail />}
      {stage === 'otp' && <ForgotPasswordOtp />}
    </SForgotPage>
  );
};
