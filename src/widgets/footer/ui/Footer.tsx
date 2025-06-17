import { Box } from '@mui/material';
import React from 'react';

import { Logo } from '@/shared/components';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
      <footer className="flex bg-secondary.main">
        <div className="max-w-400 mx-auto w-[100%] pt-10">
          <div className="grid grid-cols-[2fr_1fr_1fr_2fr]">
            <div>
              <Logo theme="light" />
              <div>fffff</div>
              <div>fffff</div>
              <div>fffff</div>
            </div>
            <div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
            </div>
            <div>
              <div>Service</div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
              <div>Information</div>
            </div>
            <div>
              <div>Subscribe</div>
              <div>Enter</div>
            </div>
          </div>
          <div className="grid grid-cols-[2fr_3fr_1fr] border-t border-[red] mt-10 pt-5 h-15">
            <div>fff</div>
            <div>fff</div>
            <div>fff</div>
          </div>
        </div>
      </footer>
    </Box>
  );
};
