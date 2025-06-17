'use client';

import React from 'react';

import { ProductCard } from '@/entities/product';

export const Home = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-5">
      {new Array(10).fill(0).map((_, i) => (
        <ProductCard
          key={i}
          onAddCard={() => {
            console.log('addCard');
          }}
          id={i}
          description={'Printed Cotton T-Shirt'}
          name={'Roadstar'}
          onAddFavorite={() => {
            console.log('addFavorite');
          }}
          price={33.33}
          url={'/shirt.jpg'}
        />
      ))}
    </div>
  );
};
