import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import React from 'react';

export const ForgotPassword = () => {
  return (
    <div>
      <Button
        sx={{
          textTransform: 'capitalize',
        }}
        startIcon={<ArrowBackIosIcon />}
      >
        Back
      </Button>
    </div>
  );
};
