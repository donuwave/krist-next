import React from 'react';

export type Stage = 'email' | 'otp';

export type StageContextValue = {
  stage: Stage;
  setStage: React.Dispatch<React.SetStateAction<Stage>>;
};
