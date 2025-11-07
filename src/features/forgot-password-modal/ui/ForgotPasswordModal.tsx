import { Button } from 'antd';
import React, { FC } from 'react';

import { SuccessLogo } from '@/shared/components/success-logo';

import {
  SDescription,
  SModal,
  SModalContent,
  SModalFooter,
  STitle,
} from './forgotPasswordModal.styles';
import { ForgotPasswordModalProps } from '../model/forgotPasswordModal.types';

export const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
  open,
  onBackLogin,
  onCancel,
}) => {
  const footerModal = (
    <SModalFooter>
      <Button onClick={onBackLogin} size="large" type="primary" htmlType="submit">
        Back to Login
      </Button>
    </SModalFooter>
  );

  return (
    <SModal centered footer={footerModal} width="430px" open={open} onCancel={onCancel}>
      <SModalContent>
        <SuccessLogo />

        <STitle>Password Changed Successfully</STitle>
        <SDescription>Your password has been updated successfully</SDescription>
      </SModalContent>
    </SModal>
  );
};
