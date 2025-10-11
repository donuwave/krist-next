import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

import { StepsContextValue } from '../model/stepContext.types';

const StepsContext = createContext<StepsContextValue | null>(null);

export const StepsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <StepsContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => {
  const ctx = useContext(StepsContext);
  if (!ctx) throw new Error('useStage must be used within StageProvider');
  return ctx;
};
