import { Button, ModalProps } from 'antd';
import React, { FC } from 'react';

import { SuccessLogo } from '@/shared/components/success-logo';

import {
  SDescription,
  SModal,
  SModalContent,
  SModalFooter,
  STitle,
} from './orderCreateModal.styles';

interface OrderCreateModalProps {
  open: boolean;
  onCancel: ModalProps['onCancel'];
  onBackHome: () => void;
  onViewOrder: () => void;
}

export const OrderCreateModal: FC<OrderCreateModalProps> = ({
  open,
  onCancel,
  onViewOrder,
  onBackHome,
}) => {
  return (
    <SModal
      centered
      footer={
        <SModalFooter>
          <Button onClick={onViewOrder} size="large" type="primary" htmlType="submit">
            View Order
          </Button>
          <Button onClick={onBackHome} size="large" htmlType="submit">
            Back to Home
          </Button>
        </SModalFooter>
      }
      width="430px"
      open={open}
      onCancel={onCancel}
    >
      <SModalContent>
        <SuccessLogo />
        <STitle>Your order is confirmed</STitle>
        <SDescription>
          Thanks for shopping! your order has not shipped yet, but we will send you and email when
          it done
        </SDescription>
      </SModalContent>
    </SModal>
  );
};
