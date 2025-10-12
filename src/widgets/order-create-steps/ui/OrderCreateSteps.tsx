import { StepProps, Steps } from 'antd';
import React, { useMemo, useState } from 'react';

import { AddressAdd } from '@/features/address-add';
import { AddressHorizontalList } from '@/features/address-horizontal-list';
import { PaymentAdd } from '@/features/payment-add';
import { PaymentList } from '@/features/payment-list';
import { useSteps } from '@/widgets/order-create-steps';
import { OrderReview } from '@/widgets/order-review';

import {
  SStep,
  SList,
  SSetStageButton,
  STitle,
  STitleOrderCreate,
  SSubmit,
  SContainerPayment,
  SButton,
} from './orderCreateSteps.styles';
import { getCurrentItems, STEP_LABELS } from '../lib/getCurrentSteps';
import { StepStatus } from '../model/orderCreateStepts.types';
//TODO: добавить кнопку для создания subtotal

const FooterAddressAdd = (
  <SSubmit type="primary" size="large" htmlType="submit">
    Add New Address
  </SSubmit>
);

export const OrderCreateSteps = () => {
  const { currentStep, setCurrentStep } = useSteps();

  const [stepStatuses, setStepStatuses] = useState<StepStatus[]>(['process', 'wait', 'wait']);

  const items: StepProps[] = useMemo(
    () => getCurrentItems({ currentStep, stepStatuses }),
    [currentStep, stepStatuses]
  );

  const handleNext = () => {
    setStepStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[currentStep] = 'finish';
      if (currentStep + 1 < newStatuses.length) {
        newStatuses[currentStep + 1] = 'process';
      }
      return newStatuses;
    });

    if (currentStep + 1 < STEP_LABELS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onChange = (targetIndex: number) => {
    if (targetIndex === currentStep) return;

    if (targetIndex < currentStep) {
      setCurrentStep(targetIndex);
      return;
    }

    if (targetIndex > currentStep) {
      const prevStepStatus = stepStatuses[targetIndex - 1];

      if (prevStepStatus === 'finish') {
        setCurrentStep(targetIndex);
      }
    }
  };

  return (
    <div>
      <STitleOrderCreate>Shipping Address</STitleOrderCreate>
      <Steps size="small" current={currentStep} onChange={onChange} items={items} />

      {currentStep === 0 && (
        <SStep>
          <SList>
            <AddressHorizontalList />

            <SSetStageButton size="large" type="primary" onClick={handleNext}>
              Deliver Here
            </SSetStageButton>
          </SList>

          <AddressAdd footer={FooterAddressAdd} />
        </SStep>
      )}

      {currentStep === 1 && (
        <SStep>
          <STitle>Select a payment method</STitle>
          <PaymentList />

          <SSetStageButton size="large" type="primary" onClick={handleNext}>
            Continue
          </SSetStageButton>

          <SContainerPayment>
            <PaymentAdd
              footer={
                <SButton type="primary" size="large">
                  Add Card
                </SButton>
              }
            />
          </SContainerPayment>
        </SStep>
      )}

      {currentStep === 2 && (
        <SStep>
          <OrderReview />
        </SStep>
      )}
    </div>
  );
};
