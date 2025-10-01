'use client';

import React, { FC, useState } from 'react';

import { SButton, SStepper, SValue } from './stepper.styles';

interface StepperProps {
  limit?: number;
}

//TODO: Стоит вынести потом это состояние из компонента
export const Stepper: FC<StepperProps> = ({ limit = 50 }) => {
  const [step, setStep] = useState(0);

  const handleStepChange = (event: 'add' | 'del') => {
    if (event === 'add') {
      setStep(step + 1);
    }

    if (event === 'del' && step !== 0) {
      setStep(step - 1);
    }
  };

  return (
    <SStepper>
      <SButton onClick={() => handleStepChange('del')}>-</SButton>
      <SValue>{step}</SValue>
      <SButton disabled={limit === step} onClick={() => handleStepChange('add')}>
        +
      </SButton>
    </SStepper>
  );
};
