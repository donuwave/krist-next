import React, { useMemo, useState } from 'react';

import { SImg, SPreview, SProductPhotoChoice, SSmallPreview } from './productPhotoChoice.styles';

interface ProductPhotoChoiceProps {
  id: number;
  src: string;
  main: boolean;
}

//TODO: Вытащить интерфейсы
export const ProductPhotoChoice = () => {
  const initialState: ProductPhotoChoiceProps[] = useMemo(() => {
    return ['/shirt.jpg', '/shirt.jpg', '/shirt.jpg', '/pac.jpg'].map((el, i) => {
      return {
        id: (i += 1),
        src: el,
        main: i === 0,
      };
    });
  }, []);

  const [photos, setPhotos] = useState<ProductPhotoChoiceProps[]>(initialState);
  const [main, setMain] = useState<Omit<ProductPhotoChoiceProps, 'main'>>(initialState[0]);

  const choicePhoto = (id: number) => {
    const selectedPhoto = photos.find((item) => item.id === id);

    if (selectedPhoto) {
      setMain({ id: selectedPhoto.id, src: selectedPhoto.src });
      setPhotos((prev) => prev.map((el) => ({ ...el, main: el.id === id })));
    }
  };

  return (
    <SProductPhotoChoice>
      <SImg src={main.src} alt="пупу" />
      <SSmallPreview>
        {photos.map(({ src, id }) => (
          <SPreview key={id} $isSelected={id === main.id}>
            <img onClick={() => choicePhoto(id)} src={src} alt={src} />
          </SPreview>
        ))}
      </SSmallPreview>
    </SProductPhotoChoice>
  );
};
