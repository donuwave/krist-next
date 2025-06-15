'use client';

import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

import { routes } from '@/shared/config/routes';
import { Input } from '@/shared/ui';

export const SignUp = () => {
  const router = useRouter();

  const handleAuthUser = () => {
    router.push(routes.login);
  };

  return (
    <form className="h-full w-[70%] flex flex-col  justify-center">
      <Typography variant="h4" fontWeight="bold">
        Create New Account
      </Typography>
      <Typography component="span" sx={{ color: 'secondary.main', paddingTop: '5px' }}>
        Please enter details
      </Typography>
      <div>
        <div className="mt-10 flex flex-col gap-6">
          <Input variant="outlined" inputLabel="First Name" placeholder="Input first name" />
          <Input variant="outlined" inputLabel="Last Name" placeholder="Input last name" />
          <Input variant="outlined" inputLabel="Email Address" placeholder="Input Email" />
          <Input variant="outlined" inputLabel="Password" placeholder="Input Password" />
          <FormControlLabel control={<Checkbox />} label="I agree to the Terms & Conditions" />

          <div className="flex flex-col">
            <Button
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
