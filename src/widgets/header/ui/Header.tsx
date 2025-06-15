'use client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Button, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Navbar } from '@/features/navbar';
import { Logo } from '@/shared/components';
import { routes } from '@/shared/config/routes';

export const Header = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(routes.login);
  };

  return (
    <header className="flex justify-between items-center h-20 max-w-400 mx-auto">
      <Logo />
      <Navbar />
      <div className="flex gap-10">
        <div className="flex gap-2">
          <IconButton aria-label="delete">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton>
            <ShoppingBasketIcon />
          </IconButton>
        </div>
        <Button
          onClick={handleLogin}
          className="capitalize"
          variant="contained"
          sx={{
            '&.MuiButtonBase-root': {
              textTransform: 'capitalize',
            },
          }}
        >
          Login
        </Button>
      </div>
    </header>
  );
};
