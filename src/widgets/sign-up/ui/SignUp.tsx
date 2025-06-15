'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { routes } from '@/shared/config/routes';
import { Input } from '@/shared/ui';
import { SignInForm } from '@/widgets/sign-in/model/sign-in.types';

import { schema } from '../lib/sign-up.validation';
import { SignUpForm } from '../model/sign-up.types';

export const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(schema),
  });

  const handleAuthUser = () => {
    router.push(routes.login);
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
        Create New Account
      </Typography>
      <Typography component="span" sx={{ color: 'secondary.main', paddingTop: '5px' }}>
        Please enter details
      </Typography>
      <div>
        <div className="mt-10 flex flex-col gap-6">
          <Input
            variant="outlined"
            inputLabel="First Name"
            placeholder="Input first name"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...register('firstName')}
          />
          <Input
            variant="outlined"
            inputLabel="Last Name"
            placeholder="Input last name"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register('lastName')}
          />
          <Input
            variant="outlined"
            inputLabel="Email Address"
            placeholder="Input Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register('email')}
          />
          <Input
            variant="outlined"
            inputLabel="Password"
            placeholder="Input Password"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register('password')}
          />
          <FormControlLabel control={<Checkbox />} label="I agree to the Terms & Conditions" />

          <div className="flex flex-col">
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
              Signup
            </Button>
            <Button
              onClick={handleAuthUser}
              sx={{
                justifyContent: 'start',
                marginTop: '5px',
                width: 'max-content',
                textTransform: 'capitalize',
              }}
              variant="text"
            >
              There is account?
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
