import { Box, Button, Modal, Typography } from '@mui/material';
import React, { FC } from 'react';

import { PasswordChangedProps } from '../../model/password-changed.types';

export const PasswordChanged: FC<PasswordChangedProps> = ({ onSuccess }) => {
  return (
    <Modal open onClose={onSuccess}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 440,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
        className="flex flex-col gap-2"
      >
        <div className="flex items-center justify-center mb-[20px]">
          <div className="w-[108px] h-[108px] rounded-full bg-[#131118]/5 flex items-center justify-center">
            <div className="w-[86px] h-[86px] rounded-full bg-[#131118]/10 flex items-center justify-center">
              <div className="w-[64px] h-[64px] rounded-full bg-[#131118] flex items-center justify-center">
                <div className="bg-[url(/current.png)] z-10 w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
        <Typography sx={{ textAlign: 'center' }} variant="h5" fontWeight="bold">
          Password Changed Successfully
        </Typography>
        <Typography sx={{ textAlign: 'center' }} component="span">
          Your password has been updated successfully
        </Typography>

        <Button
          onClick={onSuccess}
          type="submit"
          sx={{
            '&.MuiButtonBase-root': {
              height: 56,
              textTransform: 'capitalize',
              marginTop: '30px',
            },
          }}
          size="large"
          variant="contained"
        >
          Back to Login
        </Button>
      </Box>
    </Modal>
  );
};
