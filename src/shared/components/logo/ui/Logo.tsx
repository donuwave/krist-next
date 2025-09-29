'use client';

import React, { FC } from 'react';

import { useGlobalStore } from '@/entities/global-settings';

import { getUrlImg } from '../lib/getUrlImg';
import { LogoProps } from '../model/logo.types';

export const Logo: FC<LogoProps> = ({ isInverted = false }) => {
  const { theme } = useGlobalStore();
  const src = getUrlImg({ theme, isInverted });

  return <img alt="Логотип" src={src} />;
};
