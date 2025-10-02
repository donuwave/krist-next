'use client';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Popover } from 'antd';
import React, { useState } from 'react';

import { Menu } from '@/features/menu';
import { Logo } from '@/shared/components';
import { CartPopover } from '@/widgets/cart-popover';

import { SActions, SHeader, SOverlay } from './header.styles';

export const Header = () => {
  const [isPopoverCart, setIsPopoverCart] = useState(false);

  const handleTogglePopover = () => {
    setIsPopoverCart((prev) => !prev);
  };

  return (
    <SHeader>
      <Logo />
      <Menu />
      <SActions>
        <Button type="link" icon={<FontAwesomeIcon icon={faHeart} />} />
        <Button type="link" icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
        {isPopoverCart && <SOverlay />}
        <Popover
          open={isPopoverCart}
          trigger="click"
          onOpenChange={handleTogglePopover}
          content={<CartPopover onClose={handleTogglePopover} />}
        >
          <Button type="link" icon={<FontAwesomeIcon icon={faCartShopping} />} />
        </Popover>
        <Button type="primary">Login</Button>
      </SActions>
    </SHeader>
  );
};
