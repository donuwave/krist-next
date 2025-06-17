import Image from 'next/image';
import React, { FC } from 'react';

import { LogoProps } from '../model/logo.types';

export const Logo: FC<LogoProps> = ({ theme = 'dark' }) => {
  const src = theme === 'dark' ? '/logo.png' : '/logo-light.jpg';

  return <Image src={src} alt="logo" width={100} height={30} />;
};
