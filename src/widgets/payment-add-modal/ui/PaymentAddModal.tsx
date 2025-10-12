'use client';

import { Button, Modal } from 'antd';
import { FC } from 'react';

import { PaymentAdd } from '@/features/payment-add';

import { SAddNewCard, SFooter } from './paymentAddModal.styles';
import { PaymentAddModalProps } from '../model/paymentAddModal.types';

export const PaymentAddModal: FC<PaymentAddModalProps> = ({ open, onOpen, onCancel }) => {
  return (
    <div>
      <SAddNewCard onClick={onOpen} size="large" type="primary">
        + Add New Card
      </SAddNewCard>

      <Modal footer={null} centered width="430px" open={open} onCancel={onCancel}>
        <PaymentAdd
          footer={
            <SFooter>
              <Button onClick={onCancel} size="large">
                Cancel
              </Button>
              <Button htmlType="submit" size="large" type="primary">
                Add New Card
              </Button>
            </SFooter>
          }
        />
      </Modal>
    </div>
  );
};
