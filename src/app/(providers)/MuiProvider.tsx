'use client';

import { AppProvider } from '@toolpad/core/AppProvider';
import React, { FC, PropsWithChildren } from 'react';

import { getTheme, useUserSettings } from '@/entities/user-settings';

export const MuiProvider: FC<PropsWithChildren> = ({ children }) => {
  const settings = useUserSettings();
  const theme = getTheme(settings.theme);

  return <AppProvider theme={theme}>{children}</AppProvider>;
};
