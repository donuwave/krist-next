'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { SButton, SMenu } from './menu.styles';
import { menuList } from '../lib/menuList';

export const Menu = () => {
  const pathname = usePathname();

  return (
    <SMenu>
      {menuList.map(({ link, label }) => {
        const selectedLink = pathname === link;

        return (
          <SButton $selectedLink={selectedLink} key={label} type="link">
            <Link href={link}>{label}</Link>
          </SButton>
        );
      })}
    </SMenu>
  );
};
