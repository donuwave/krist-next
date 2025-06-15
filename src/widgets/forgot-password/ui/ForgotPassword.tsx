'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { PasswordChanged } from '@/entities/auth';
import { ForgotPasswordEnter } from '@/features/forgor-password-enter';
import { ForgotPasswordSend } from '@/features/forgot-password-send';
import { routes } from '@/shared/config/routes';

import { ForgotPasswordStage } from '../model/forgot-password.types';

export const ForgotPassword = () => {
  const router = useRouter();

  const [stage, setStage] = useState<ForgotPasswordStage>('sentOtp');
  const [isSuccessForgot, setIsSuccessForgot] = useState(false);

  const handleSendOtp = () => {
    // Запрос
    setStage('enterOtp');
  };

  const handleEnterOtp = () => {
    // Запрос
    setIsSuccessForgot(true);
  };

  const handleBackEnterOtp = () => {
    setStage('sentOtp');
  };

  const handleSuccessPasswordChanged = () => {
    setIsSuccessForgot(false);
    router.push(routes.login);
  };

  return (
    <>
      {isSuccessForgot && <PasswordChanged onSuccess={handleSuccessPasswordChanged} />}
      {stage === 'sentOtp' && <ForgotPasswordSend onSubmit={handleSendOtp} />}
      {stage === 'enterOtp' && (
        <ForgotPasswordEnter onSubmit={handleEnterOtp} onBack={handleBackEnterOtp} />
      )}
    </>
  );
};
