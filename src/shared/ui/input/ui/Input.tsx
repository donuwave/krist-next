import { TextField } from '@mui/material';
import { height } from '@mui/system';
import React, { FC } from 'react';

import { InputProps } from '../model/input.types';

export const Input: FC<InputProps> = ({ inputLabel, ...props }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs pb-2">{inputLabel}</span>
      <TextField
        {...props}
        sx={{
          '&.MuiInputBase-input': {
            borderRadius: 13,
          },
        }}
      />
    </div>
  );
};
