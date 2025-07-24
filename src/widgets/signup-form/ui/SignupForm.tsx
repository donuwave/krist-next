'use client';

import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';

import { ROUTES } from '@/shared/config';

import { SSignupForm, STitle, STitles, SForm, SActions, SDescription } from './signup-form.styles';
import { initialForm } from '../lib/initialForm';
import { validationSchema } from '../lib/validationSchema';

export const SignupForm = () => {
  const { values, setValues, handleSubmit, touched, errors } = useFormik({
    initialValues: initialForm,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const router = useRouter();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleRedirectLogin = () => {
    router.push(ROUTES.LOGIN);
  };

  return (
    <SSignupForm onSubmit={handleSubmit}>
      <STitles>
        <STitle>Create New Account</STitle>
        <SDescription>Please enter details</SDescription>
      </STitles>

      <SForm>
        <Form.Item
          validateStatus={touched.firstName && errors.firstName ? 'error' : ''}
          help={touched.firstName && errors.firstName ? errors.firstName : 'First name address'}
        >
          <Input
            size="large"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleFirstNameChange}
          />
        </Form.Item>
        <Form.Item
          validateStatus={touched.lastName && errors.lastName ? 'error' : ''}
          help={touched.lastName && errors.lastName ? errors.lastName : 'Last name address'}
        >
          <Input
            size="large"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleLastNameChange}
          />
        </Form.Item>
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
            placeholder="Password"
            value={values.password}
            onChange={handlePasswordChange}
          />
        </Form.Item>

        <SActions>
          <Button onClick={handleRedirectLogin} type="link">
            Already have an account?
          </Button>
        </SActions>
      </SForm>

      <Button size="large" type="primary" htmlType="submit">
        Login
      </Button>
    </SSignupForm>
  );
};
