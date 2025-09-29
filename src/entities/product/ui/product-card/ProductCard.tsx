'use client';

import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as regularFaStar } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

import {
  SAddCard,
  SFavorite,
  SFavoriteIcon,
  SImg,
  SInfo,
  SName,
  SProductCard,
} from './productCard.styles';

//TODO: сделать слайдер для перелистывания с помощью мышки как в вайлдбериз
export const ProductCard = () => {
  const [isHover, setIsHover] = useState(false);
  //TODO: Вынести с отдельньй компонент
  const [isBeating, setIsBeating] = useState(false);

  //TODO: Тест без api
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsBeating(true);
    setIsFavorite((prev) => !prev);
  };

  return (
    <SProductCard onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <SImg>
        {isHover && (
          <>
            <SAddCard>Add to Card</SAddCard>
            <SFavorite
              $isFavorite={isFavorite}
              onAnimationEnd={() => setIsBeating(false)}
              onClick={handleFavorite}
              icon={
                <SFavoriteIcon icon={isFavorite ? faStar : regularFaStar} $isBeating={isBeating} />
              }
            />
          </>
        )}
      </SImg>
      <SInfo>
        <SName>Allen Solly</SName>
        <div>Women Textured</div>
        <div>$80.00</div>
      </SInfo>
    </SProductCard>
  );
};
