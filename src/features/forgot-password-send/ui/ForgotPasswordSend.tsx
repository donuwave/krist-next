'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui';

import { schema } from '../lib/forgot-password-send.validation';
import { ForgotPasswordSendForm, ForgotPasswordProps } from '../model/forgot-password-send.types';

export const ForgotPasswordSend: FC<ForgotPasswordProps> = ({ onSubmit }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSendForm>({
    resolver: yupResolver(schema),
  });

  const handleBack = () => router.back();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start gap-8 w-[70%]">
      <Button
        onClick={handleBack}
        sx={{
          textTransform: 'capitalize',
          width: 'max-content',
        }}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
      <div className="flex flex-col gap-2">
        <Typography variant="h4" fontWeight="bold">
          Forgot Password
        </Typography>
        <Typography component="span" sx={{ color: 'secondary.main' }}>
          Enter your registered email address. we’ll send you a code to reset your password.
        </Typography>
      </div>
      <Input
        inputLabel="Email Address"
        placeholder="Input email address"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email')}
      />
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
        Send OTP
      </Button>
    </form>
  );
};
