'use client';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button, IconButton } from '@mui/material';
import React, { FC, useState } from 'react';

import { ProductCardProps } from '../model/product-card.types';

export const ProductCard: FC<ProductCardProps> = (props) => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col w-full"
    >
      <div className="relative flex justify-center">
        <img className="w-full relative" src={props.url} alt={props.name} />
        {isHovered && (
          <IconButton
            onClick={() => props.onAddFavorite(props.id)}
            sx={{
              position: 'absolute',
              right: 10,
              top: 20,
              background: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
            aria-label="delete"
          >
            <StarBorderIcon fontWeight="bold" />
          </IconButton>
        )}
        {isHovered && (
          <Button
            onClick={() => props.onAddCard(props.id)}
            sx={{
              position: 'absolute',
              bottom: 20,
              height: 50,
              width: '80%',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            Add to Cart
          </Button>
        )}
      </div>
      <div className="font-black mt-3">{props.name}</div>
      <div>{props.description}</div>
      <div>${props.price}</div>
    </div>
  );
};
