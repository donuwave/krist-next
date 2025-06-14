import React, { FC, PropsWithChildren } from 'react';

import { MuiProvider } from './MuiProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <MuiProvider>{children}</MuiProvider>;
};
