'use client';

import React from 'react';

import { InputButton } from '@/shared/components';
import { OrderCreateSteps } from '@/widgets/order-create-steps';

import {
  SDraftOrderPage,
  SSubtotal,
  SSubtotalTitle,
  STotal,
  SGrandTotal,
  SDiscount,
  SCharge,
} from './draftOrderPage.styles';

//TODO: форма из трех этапов
//TODO: нужно каким-то образом записывать в создаваемый order список из корзины
export const DraftOrderPage = () => {
  return (
    <SDraftOrderPage>
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
      </SSubtotal>
    </SDraftOrderPage>
  );
};
