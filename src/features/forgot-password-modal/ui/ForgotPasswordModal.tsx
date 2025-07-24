import { Button, ModalProps } from 'antd';
import React, { FC } from 'react';

import {
  SDescription,
  SInner,
  SModal,
  SModalContent,
  SModalFooter,
  SOther,
  SSmall,
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
        <SOther>
          <SInner>
            <SSmall>
              <img src="./current.png" />
            </SSmall>
          </SInner>
        </SOther>

        <STitle>Password Changed Successfully</STitle>
        <SDescription>Your password has been updated successfully</SDescription>
      </SModalContent>
    </SModal>
  );
};
