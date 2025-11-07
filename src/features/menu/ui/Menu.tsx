'use client';

import React from 'react';

import { SMenu } from './menu.styles';
import { MenuCard } from './MenuCard';
import { menuList } from '../lib/menuList';

export const Menu = () => {
  return (
    <SMenu>
      {menuList.map(({ link, label }) => (
        <MenuCard key={link} link={link} label={label} />
      ))}
    </SMenu>
  );
};
