'use client';

import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';

import { useStage } from '@/entities/auth';

import {
  SDescription,
  SForgotPasswordEmailForm,
  STitle,
  STitles,
} from './forgotPasswordEmail.styles';
import { initialForgotPassword } from '../lib/initialForgotPassword';
import { validationSchema } from '../lib/validationSchema';

export const ForgotPasswordEmail = () => {
  const { setStage } = useStage();

  const { values, setValues, touched, errors, handleSubmit } = useFormik({
    initialValues: initialForgotPassword,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setStage('otp');
    },
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, email: e.target.value });
  };

  return (
    <SForgotPasswordEmailForm onSubmit={handleSubmit}>
      <STitles>
        <STitle>Forgot Password</STitle>
        <SDescription>
          Enter your registered email address. we’ll send you a code to reset your password.
        </SDescription>
      </STitles>

      <Form.Item
        validateStatus={touched.email && errors.email ? 'error' : ''}
        help={touched.email && errors.email ? errors.email : 'Email address'}
      >
        <Input
          size="large"
          placeholder="Email address"
          value={values.email}
          onChange={handleEmailChange}
        />
      </Form.Item>

      <Button size="large" type="primary" htmlType="submit">
        Send OTP
      </Button>
    </SForgotPasswordEmailForm>
  );
};
