import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, FormHelperText, Typography } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { schema } from '../lib/forgot-password-enter';
import {
  ForgotPasswordEnterForm,
  ForgotPasswordEnterProps,
} from '../model/forgot-password-enter.types';

//TODO: изменить название фичи
export const ForgotPasswordEnter: FC<ForgotPasswordEnterProps> = ({ onSubmit, onBack }) => {
  const { control, handleSubmit } = useForm<ForgotPasswordEnterForm>({
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
      <Controller
        name="otp"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <MuiOtpInput {...field} length={6} sx={{ gap: 1 }} />
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </Box>
        )}
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
