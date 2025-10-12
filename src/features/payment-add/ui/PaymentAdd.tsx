import { Form, Input } from 'antd';
import { FC } from 'react';

import { SFullField, SPaymentAdd, SPaymentAddContainer, STitle } from './paymentAdd.styles';
import { PaymentAddProps } from '../model/paymenAdd.types';

export const PaymentAdd: FC<PaymentAddProps> = ({ footer }) => {
  return (
    <SPaymentAddContainer>
      <STitle>Add a new payment method</STitle>

      <SPaymentAdd>
        <SFullField help="Card Number">
          <Input size="large" placeholder="Enter card number" />
        </SFullField>
        <SFullField help="Card Name">
          <Input size="large" placeholder="Enter name" />
        </SFullField>
        <Form.Item help="Expire Time">
          <Input size="large" placeholder="Enter expire time" />
        </Form.Item>
        <Form.Item help="CVV">
          <Input size="large" placeholder="Enter cvv code" />
        </Form.Item>
      </SPaymentAdd>
      {footer}
    </SPaymentAddContainer>
  );
};
