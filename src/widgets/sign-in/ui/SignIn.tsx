import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';

import { Input } from '@/shared/ui';

export const SignIn = () => {
  return (
    <div className="h-full w-[70%] flex flex-col  justify-center">
      <Typography variant="h4" fontWeight="bold">
        Welcome 👋
      </Typography>
      <Typography component="span" sx={{ color: 'secondary.main', paddingTop: '5px' }}>
        Please login here
      </Typography>
      <div>
        <div className="mt-10 flex flex-col gap-6">
          <Input
            sx={{ borderRadius: 12 }}
            size="medium"
            variant="outlined"
            inputLabel="Email Address"
            placeholder="Email"
          />
          <Input variant="outlined" inputLabel="Password" placeholder="Password" />
          <div className="flex items-center justify-between">
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <div>Forgot Password?</div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <Button
            sx={{
              '&.MuiButtonBase-root': {
                height: 56,
              },
            }}
            size="large"
            variant="contained"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
