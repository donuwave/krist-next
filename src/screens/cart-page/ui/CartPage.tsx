'use client';

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

import { CartCard } from '@/entities/cart';
import { InputButton } from '@/shared/components';
import { ROUTES } from '@/shared/config';

import {
  SCart,
  SCharge,
  SDiscount,
  SGrandTotal,
  SSubtotal,
  SSubtotalTitle,
  STitle,
  STitleCart,
  STotal,
} from './cartPage.styles';

export const CartPage = () => {
  const router = useRouter();

  const handleCreateOrder = () => {
    router.push(ROUTES.ORDER_DRAFT);
  };

  return (
    <div>
      <STitle>Cart</STitle>

      <SCart>
        <div>
          <STitleCart>
            <div>Products</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </STitleCart>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
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
            <Button onClick={handleCreateOrder} size="large" type="primary">
              Proceed to checkout
            </Button>
          </STotal>
        </SSubtotal>
      </SCart>
    </div>
  );
};
