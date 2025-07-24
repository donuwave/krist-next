import { Button } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { ForgotPasswordModal } from '@/features/forgot-password-modal';

import {
  SDescription,
  STitle,
  STitles,
  SForgotPasswordOtpForm,
  SOtpInput,
  SWrapperOtp,
} from './forgotPasswordOtp.styles';
import { initialForgotPassword } from '../lib/initialForgotPassword';
import { validationSchema } from '../lib/validationSchema';

export const ForgotPasswordOtp = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { values, setValues, touched, errors, handleSubmit } = useFormik({
    initialValues: initialForgotPassword,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleToggle();
    },
  });
  const router = useRouter();

  const handleOTPChange = (value: string) => {
    setValues({ ...values, otp: value });
  };

  const handleBackLogin = () => {
    router.push('/login');
  };

  const handleToggle = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <ForgotPasswordModal
        open={isOpenModal}
        onCancel={handleToggle}
        onBackLogin={handleBackLogin}
      />

      <SForgotPasswordOtpForm onSubmit={handleSubmit}>
        <STitles>
          <STitle>Forgot Password</STitle>
          <SDescription>
            Enter your registered email address. we’ll send you a code to reset your password.
          </SDescription>
        </STitles>

        <SWrapperOtp
          validateStatus={touched.otp && errors.otp ? 'error' : ''}
          help={touched.otp && errors.otp ? errors.otp : ''}
        >
          <SOtpInput length={6} value={values.otp} onChange={handleOTPChange} />
        </SWrapperOtp>

        <Button size="large" type="primary" htmlType="submit">
          Send OTP
        </Button>
      </SForgotPasswordOtpForm>
    </>
  );
};
