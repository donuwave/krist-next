import { Button } from 'antd';
import React from 'react';

import { ProductOrder } from '@/entities/product';
import { useSteps } from '@/widgets/order-create-steps';

import { SCard, SInfoAddress, SList, SName, SOrderItem, STitle } from './orderReview.styles';

export const OrderReview = () => {
  const { setCurrentStep } = useSteps();

  const handleChangeStepAddress = () => {
    setCurrentStep(0);
  };

  const handleChangeStepPayment = () => {
    setCurrentStep(1);
  };

  return (
    <>
      <STitle>Estimated delivery: 22 Feb 2022</STitle>

      <SOrderItem>
        <SList>
          <ProductOrder />
          <ProductOrder />
        </SList>
      </SOrderItem>

      <SOrderItem>
        <STitle>Shipping Address</STitle>

        <SCard>
          <SInfoAddress>
            <SName>Robert Fox</SName>
            <span>4517 Washington Ave. Manchester, Kentucky 39819</span>
          </SInfoAddress>
          <Button onClick={handleChangeStepAddress}>Edit</Button>
        </SCard>
      </SOrderItem>

      <SOrderItem>
        <STitle>Payment Method</STitle>

        <SCard>
          <SName>Debit Card: 9999 2222 8902 2312</SName>
          <Button onClick={handleChangeStepPayment}>Edit</Button>
        </SCard>
      </SOrderItem>
    </>
  );
};
