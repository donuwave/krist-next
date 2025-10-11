'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { OrderCreateModal } from '@/entities/order';
import { InputButton } from '@/shared/components';
import { ROUTES } from '@/shared/config';
import { OrderCreateSteps, StepsProvider, useSteps } from '@/widgets/order-create-steps';

import {
  SDraftOrderPage,
  SSubtotal,
  SSubtotalTitle,
  STotal,
  SGrandTotal,
  SDiscount,
  SCharge,
  SSubmit,
} from './draftOrderPage.styles';

//TODO: форма из трех этапов
//TODO: нужно каким-то образом записывать в создаваемый order список из корзины
//TODO: сделать stepStatuses в context
const DraftOrder = () => {
  const router = useRouter();
  const { currentStep } = useSteps();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleBackHome = () => {
    router.push(ROUTES.HOME);
  };

  const isPlaceOrder = currentStep === 2;

  return (
    <SDraftOrderPage>
      <OrderCreateModal
        onBackHome={handleBackHome}
        onViewOrder={handleBackHome}
        open={open}
        onCancel={handleToggle}
      />
      <OrderCreateSteps />

      <SSubtotal>
        <SSubtotalTitle>
          <span>Subtotal</span>
          <span>$200.00</span>
        </SSubtotalTitle>
        <SCharge>
          <InputButton />
          <SDiscount>
            <span>Delivery Charge</span>
            <span>$5.00</span>
          </SDiscount>
        </SCharge>
        <STotal>
          <SGrandTotal>
            <span>Grand Total</span>
            <span>$205.00</span>
          </SGrandTotal>
        </STotal>
        {isPlaceOrder && (
          <SSubmit onClick={handleToggle} type="primary" size="large">
            Place Order
          </SSubmit>
        )}
      </SSubtotal>
    </SDraftOrderPage>
  );
};

export const DraftOrderPage = () => (
  <StepsProvider>
    <DraftOrder />
  </StepsProvider>
);
