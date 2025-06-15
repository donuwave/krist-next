import { TextField } from '@mui/material';
import React, { FC } from 'react';

import { InputProps } from '../model/input.types';

export const Input: FC<InputProps> = ({ inputLabel, ...props }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xs pb-2">{inputLabel}</span>
      <TextField {...props} />
    </div>
  );
};
