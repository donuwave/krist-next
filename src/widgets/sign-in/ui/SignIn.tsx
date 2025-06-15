'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { routes } from '@/shared/config/routes';
import { Input } from '@/shared/ui';

import { schema } from '../lib/sign-in.validation';
import { SignInForm } from '../model/sign-in.types';

export const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(schema),
  });

  const handleCreateAccount = () => {
    router.push(routes.registration);
  };

  const handleForgotPassword = () => {
    router.push(routes.forgotPassword);
  };

  const handleSubmitForm: SubmitHandler<SignInForm> = (d) => {
    // Запрос
    console.log(d);
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="h-full w-[70%] flex flex-col  justify-center"
    >
      <Typography variant="h4" fontWeight="bold">
        Welcome 👋
      </Typography>
      <Typography component="span" sx={{ color: 'secondary.main', paddingTop: '5px' }}>
        Please login here
      </Typography>
      <div>
        <div className="mt-10 flex flex-col gap-6">
          <Input
            variant="outlined"
            inputLabel="Email Address"
            placeholder="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <Input
            type="password"
            variant="outlined"
            inputLabel="Password"
            placeholder="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
          <div className="flex items-center justify-between">
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Button
              onClick={handleForgotPassword}
              sx={{
                textTransform: 'capitalize',
              }}
              variant="text"
            >
              Forgot Password?
            </Button>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <Button
            type="submit"
            sx={{
              '&.MuiButtonBase-root': {
                height: 56,
                textTransform: 'capitalize',
              },
            }}
            size="large"
            variant="contained"
          >
            Login
          </Button>
          <Button
            onClick={handleCreateAccount}
            sx={{
              justifyContent: 'start',
              marginTop: '5px',
              width: 'max-content',
              textTransform: 'capitalize',
            }}
            variant="text"
          >
            No account?
          </Button>
        </div>
      </div>
    </form>
  );
};
