import { Button, ModalProps } from 'antd';
import React, { FC } from 'react';

import { SuccessLogo } from '@/shared/components/success-logo';

import {
  SDescription,
  SModal,
  SModalContent,
  SModalFooter,
  STitle,
} from './forgotPasswordModal.styles';

interface ForgotPasswordModalProps extends ModalProps {
  onBackLogin: () => void;
}

export const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
  open,
  onBackLogin,
  onCancel,
}) => {
  return (
    <SModal
      centered
      footer={
        <SModalFooter>
          <Button onClick={onBackLogin} size="large" type="primary" htmlType="submit">
            Back to Login
          </Button>
        </SModalFooter>
      }
      width="430px"
      open={open}
      onCancel={onCancel}
    >
      <SModalContent>
        <SuccessLogo />

        <STitle>Password Changed Successfully</STitle>
        <SDescription>Your password has been updated successfully</SDescription>
      </SModalContent>
    </SModal>
  );
};
