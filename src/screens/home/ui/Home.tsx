'use client';

import React from 'react';

import { ProductCard } from '@/entities/product';

export const Home = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-5">
      <ProductCard
        onAddCard={() => {
          console.log('addCard');
        }}
        id={1}
        description={'Printed Cotton T-Shirt'}
        name={'Roadstar'}
        onAddFavorite={() => {
          console.log('addFavorite');
        }}
        price={33.33}
        url={'/shirt.jpg'}
      />
      <ProductCard
        onAddCard={() => {
          console.log('addCard');
        }}
        id={2}
        description={'Printed Cotton T-Shirt'}
        name={'Roadstar'}
        onAddFavorite={() => {
          console.log('addFavorite');
        }}
        price={33.33}
        url={'/shirt.jpg'}
      />
      <ProductCard
        onAddCard={() => {
          console.log('addCard');
        }}
        id={3}
        description={'Printed Cotton T-Shirt'}
        name={'Roadstar'}
        onAddFavorite={() => {
          console.log('addFavorite');
        }}
        price={33.33}
        url={'/shirt.jpg'}
      />
    </div>
  );
};
