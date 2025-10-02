import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { CartPreviewCard } from '@/entities/cart';
import { ROUTES } from '@/shared/config';

import { SCartPopover, SList, SSubTotal } from './cartPopover.styles';
import { CartPopoverType } from '../model/cartPopover.types';

//TODO: корзина товарова
export const CartPopover: FC<CartPopoverType> = ({ onClose }) => {
  const router = useRouter();

  const handleCart = () => {
    router.push(ROUTES.CART);
    onClose();
  };

  return (
    <SCartPopover>
      <div>You have 3 items in your cart</div>
      <SList>
        <CartPreviewCard />
        <CartPreviewCard />
        <CartPreviewCard />
      </SList>

      <SSubTotal>
        <span>Subtotal</span>
        <span>$400.00</span>
      </SSubTotal>

      <Button onClick={handleCart} size="large">
        View Cart
      </Button>
    </SCartPopover>
  );
};
