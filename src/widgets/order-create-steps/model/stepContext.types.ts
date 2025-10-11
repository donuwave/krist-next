import React from 'react';

export type StepsContextValue = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
