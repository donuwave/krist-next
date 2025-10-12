import React from 'react';

import { PaymentCard } from '@/entities/payment';

export const PaymentList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {[1, 2].map((payment) => (
        <PaymentCard onChoice={() => {}} key={payment} />
      ))}
    </div>
  );
};
