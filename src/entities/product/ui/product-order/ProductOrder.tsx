import React from 'react';

import { SImg, SInfo, SName, SProductOrder } from './productOrder.styles';

export const ProductOrder = () => {
  return (
    <SProductOrder>
      <SImg src="/shirt.jpg" />
      <SInfo>
        <SName>Girls Pink Moana Printed Dress</SName>
        <span>$50.00</span>
        <span>Size: M</span>
      </SInfo>
    </SProductOrder>
  );
};
