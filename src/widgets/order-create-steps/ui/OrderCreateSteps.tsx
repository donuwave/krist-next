import { Button, StepProps, Steps } from 'antd';
import React, { useMemo, useState } from 'react';

import { AddressAdd } from '@/features/address-add';
import { AddressHorizontalList } from '@/features/address-horizontal-list';
import {
  SAddress,
  SList,
  SSetStageButton,
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

  return (
    <div>
      <Steps size="small" current={current} onChange={onChange} items={items} />

      {current === 0 && (
        <SAddress>
          <SList>
            <AddressHorizontalList />

            <SSetStageButton size="large" type="primary" onClick={handleNext}>
              Deliver Here
            </SSetStageButton>
          </SList>

          <AddressAdd />
        </SAddress>
      )}

      {current === 1 && (
        <Button type="primary" onClick={handleNext}>
          Далее: Review
        </Button>
      )}

      {current === 2 && <div>Review summary — всё готово!</div>}
    </div>
  );
};
