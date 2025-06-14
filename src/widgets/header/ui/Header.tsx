'use client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { Navbar } from '@/features/navbar';

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 max-w-400 mx-auto">
      <Image src="/logo.png" alt="logo" width={100} height={30} />
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
        <Button className="capitalize" variant="contained">
          Login
        </Button>
      </div>
    </header>
  );
};
