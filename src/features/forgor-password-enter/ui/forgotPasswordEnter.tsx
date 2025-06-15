import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '@/shared/ui';

import { schema } from '../lib/forgot-password-enter';
import {
  ForgotPasswordEnterForm,
  ForgotPasswordEnterProps,
} from '../model/forgot-password-enter.types';

//TODO: изменить название фичи
export const ForgotPasswordEnter: FC<ForgotPasswordEnterProps> = ({ onSubmit, onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordEnterForm>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-start gap-8 w-[70%]">
      <Button
        onClick={onBack}
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
          Enter OTP
        </Typography>
        <Typography component="span" sx={{ color: 'secondary.main' }}>
          We have share a code of your registered email address robertfox@example.com
        </Typography>
      </div>
      <Input
        inputLabel="Otp"
        placeholder="Input otp"
        variant="outlined"
        error={!!errors.otp}
        helperText={errors.otp?.message}
        {...register('otp')}
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
        Verify
      </Button>
    </form>
  );
};
