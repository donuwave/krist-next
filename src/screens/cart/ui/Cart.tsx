'use client';

import { Button, Input } from 'antd';
import React from 'react';

import { CartCard } from '@/entities/cart';

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
} from './cart.styles';

//TODO: сделать компонент Input + Button
export const Cart = () => {
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
            <Input size="large" placeholder="Input discount code" />
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
            <Button size="large" type="primary">
              Proceed to checkout
            </Button>
          </STotal>
        </SSubtotal>
      </SCart>
    </div>
  );
};
