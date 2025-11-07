import React from 'react';

import { PaymentCard } from '@/entities/payment';

import { SPaymentList } from './paymentList.styles';

export const PaymentList = () => {
  return (
    <SPaymentList>
      {[1, 2].map((payment) => (
        <PaymentCard onChoice={() => {}} key={payment} />
      ))}
    </SPaymentList>
  );
};
