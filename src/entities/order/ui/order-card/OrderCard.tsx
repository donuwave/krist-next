'use client';

import { Button } from 'antd';

import {
  SActions,
  SCard,
  SImg,
  SOrderCard,
  SPrice,
  SProduct,
  SStatus,
  SStatuses,
  STitle,
  STopInfo,
} from './orderCard.styles';

export const OrderCard = () => {
  return (
    <SOrderCard>
      <STopInfo>
        <SCard>
          <SImg src="/registration.png" />
          <SProduct>
            <STitle>Girls Pink Moana printed Dress</STitle>
            <p>Size: S</p>
            <p>Qyt: 1</p>
          </SProduct>
        </SCard>
        <SPrice>$80.00</SPrice>
        <SActions>
          <Button size="middle">View Order</Button>
          <Button size="middle" type="primary">
            Write A Review
          </Button>
        </SActions>
      </STopInfo>
      <SStatuses>
        <SStatus>Delivered</SStatus>
        <div>Your product has been delivered</div>
      </SStatuses>
    </SOrderCard>
  );
};
