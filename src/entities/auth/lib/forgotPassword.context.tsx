'use client';

import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

import { Stage, StageContextValue } from '../model/forgotPassword.types';

const StageContext = createContext<StageContextValue | null>(null);

export const StageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stage, setStage] = useState<Stage>('email');

  return <StageContext.Provider value={{ stage, setStage }}>{children}</StageContext.Provider>;
};

export const useStage = () => {
  const ctx = useContext(StageContext);
  if (!ctx) throw new Error('useStage must be used within StageProvider');
  return ctx;
};
