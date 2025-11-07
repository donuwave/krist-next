import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

import { SButton } from './menu.styles';
import { IMenuList } from '../model/menu.types';

export const MenuCard: FC<IMenuList> = ({ link, label }) => {
  const pathname = usePathname();
  const selectedLink = pathname === link;

  return (
    <SButton $selectedLink={selectedLink} key={label} type="link">
      <Link href={link}>{label}</Link>
    </SButton>
  );
};
