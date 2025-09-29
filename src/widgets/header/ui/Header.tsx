import { faCartShopping, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import React from 'react';

import { Menu } from '@/features/menu';
import { Logo } from '@/shared/components';

import { SActions, SHeader } from './header.styles';

export const Header = () => {
  return (
    <SHeader>
      <Logo />
      <Menu />
      <SActions>
        <Button type="link" icon={<FontAwesomeIcon icon={faHeart} />} />
        <Button type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
        <Button type="link" icon={<FontAwesomeIcon icon={faCartShopping} />} />
        <Button type="primary">Login</Button>
      </SActions>
    </SHeader>
  );
};
