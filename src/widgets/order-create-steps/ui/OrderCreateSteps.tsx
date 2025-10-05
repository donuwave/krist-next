import { Button, StepProps, Steps } from 'antd';
import React, { useMemo, useState } from 'react';

import { AddressAdd } from '@/features/address-add';
import { AddressHorizontalList } from '@/features/address-horizontal-list';
import { PaymentList } from '@/features/payment-list';
import {
  SStep,
  SList,
  SSetStageButton,
  STitle,
  STitleOrderCreate,
} from '@/widgets/order-create-steps/ui/orderCreateSteps.styles';

import { getCurrentItems, STEP_LABELS } from '../lib/getCurrentSteps';
import { StepStatus } from '../model/orderCreateStepts.types';

export const OrderCreateSteps = () => {
  const [current, setCurrent] = useState(0);
  const [stepStatuses, setStepStatuses] = useState<StepStatus[]>(['process', 'wait', 'wait']);

  const items: StepProps[] = useMemo(
    () => getCurrentItems({ current, stepStatuses }),
    [current, stepStatuses]
  );

  const handleNext = () => {
    setStepStatuses((prev) => {
      const newStatuses = [...prev];
      newStatuses[current] = 'finish';
      if (current + 1 < newStatuses.length) {
        newStatuses[current + 1] = 'process';
      }
      return newStatuses;
    });

    if (current + 1 < STEP_LABELS.length) {
      setCurrent(current + 1);
    }
  };

  const onChange = (targetIndex: number) => {
    if (targetIndex === current) return;

    if (targetIndex < current) {
      setCurrent(targetIndex);
      return;
    }

    if (targetIndex > current) {
      const prevStepStatus = stepStatuses[targetIndex - 1];

      if (prevStepStatus === 'finish') {
        setCurrent(targetIndex);
      }
    }
  };

  //TODO: добавить форму для добавления payment method

  return (
    <div>
      <STitleOrderCreate>Shipping Address</STitleOrderCreate>
      <Steps size="small" current={current} onChange={onChange} items={items} />

      {current === 0 && (
        <SStep>
          <SList>
            <AddressHorizontalList />

            <SSetStageButton size="large" type="primary" onClick={handleNext}>
              Deliver Here
            </SSetStageButton>
          </SList>

          <AddressAdd />
        </SStep>
      )}

      {current === 1 && (
        <SStep>
          <STitle>Select a payment method</STitle>
          <PaymentList />

          <Button type="primary" onClick={handleNext}>
            Далее: Review
          </Button>
        </SStep>
      )}

      {current === 2 && <div>Review summary — всё готово!</div>}
    </div>
  );
};
