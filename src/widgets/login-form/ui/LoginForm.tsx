'use client';

import { Button, Checkbox, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ROUTES } from '@/shared/config';

import { SActions, SDescription, SForm, SLoginForm, STitle, STitles } from './loginForm.styles';
import { initialForm } from '../lib/initialForm';
import { validationSchema } from '../lib/validationSchema';

export const LoginForm = () => {
  const router = useRouter();
  const { values, setValues, handleSubmit, touched, errors } = useFormik({
    initialValues: initialForm,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleRedirectCreateAccount = () => {
    router.push(ROUTES.REGISTRATION);
  };

  const handleRedirectForgotPassword = () => {
    router.push(ROUTES.FORGOT_PASSWORD);
  };

  return (
    <SLoginForm onSubmit={handleSubmit}>
      <STitles>
        <STitle>Welcome 👋</STitle>
        <SDescription>Please login here</SDescription>
      </STitles>

      <SForm>
        <Form.Item
          validateStatus={touched.email && errors.email ? 'error' : ''}
          help={touched.email && errors.email ? errors.email : 'Email address'}
        >
          <Input
            size="large"
            placeholder="Email"
            value={values.email}
            onChange={handleEmailChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={touched.password && errors.password ? 'error' : ''}
          help={touched.password && errors.password ? errors.password : 'Password'}
        >
          <Input
            size="large"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handlePasswordChange}
          />
        </Form.Item>

        <SActions>
          <Checkbox>Remember Me</Checkbox>
          <Button type="link" onClick={handleRedirectForgotPassword}>
            Forgot Password?
          </Button>
        </SActions>
      </SForm>

      <Button size="large" type="primary" htmlType="submit">
        Login
      </Button>
      <SActions>
        <Button onClick={handleRedirectCreateAccount} type="link">
          No account?
        </Button>
      </SActions>
    </SLoginForm>
  );
};
