import { Button } from 'antd';
import React from 'react';

import { ProductCartPreview } from '@/entities/product';

import { SCartPopover, SList, SSubTotal } from './cartPopover.styles';

//TODO: корзина товарова
export const CartPopover = () => {
  return (
    <SCartPopover>
      <div>You have 3 items in your cart</div>
      <SList>
        <ProductCartPreview />
        <ProductCartPreview />
        <ProductCartPreview />
      </SList>

      <SSubTotal>
        <span>Subtotal</span>
        <span>$400.00</span>
      </SSubTotal>

      <Button size="large">View Cart</Button>
      <Button size="large" type="primary">
        Checkout
      </Button>
    </SCartPopover>
  );
};
