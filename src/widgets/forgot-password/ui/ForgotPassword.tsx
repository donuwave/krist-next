'use client';

import { useState } from 'react';

import { ForgotPasswordEnter } from '@/features/forgor-password-enter';
import { ForgotPasswordSend } from '@/features/forgot-password-send';

import { ForgotPasswordStage } from '../model/forgot-password.types';

//TODO: на этом уровне отрисовывать двe разныe фичи + их submit + модалку
export const ForgotPassword = () => {
  const [stage, setStage] = useState<ForgotPasswordStage>('sentOtp');

  const handleSendOtp = () => {
    setStage('enterOtp');
  };

  const handleEnterOtp = () => {};

  const handleBackEnterOtp = () => {
    setStage('sentOtp');
  };

  return (
    <>
      {stage === 'sentOtp' && <ForgotPasswordSend onSubmit={handleSendOtp} />}
      {stage === 'enterOtp' && (
        <ForgotPasswordEnter onSubmit={handleEnterOtp} onBack={handleBackEnterOtp} />
      )}
    </>
  );
};
