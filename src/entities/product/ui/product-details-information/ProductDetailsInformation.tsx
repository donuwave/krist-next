import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Rate } from 'antd';
import React from 'react';

import { Stepper } from '@/shared/components';

import {
  ColorChoice,
  SActions,
  SColorList,
  SColorPick,
  SOldPrice,
  SPrice,
  SProductDetailsInformation,
  SRate,
  SSize,
  SSubTitle,
  STitle,
} from './productDetailsInformation.styles';

export const ProductDetailsInformation = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];

  return (
    <SProductDetailsInformation>
      <STitle>YK Disney</STitle>
      <p>Girls Pink Moana Printed Dress</p>
      <SRate>
        <Rate disabled value={4.7} />
        <span>5.0 (121 Reviews)</span>
      </SRate>
      <SPrice>
        $80 <SOldPrice>$100</SOldPrice>
      </SPrice>
      <div>
        Универсальная обувь с голенищем, закрывающим щиколотку, защищающая от непогоды и
        обеспечивающая комфорт. Они могут быть изготовлены из кожи, замши или текстиля и оснащены
        шнурками, молнией или эластичными вставками для фиксации стопы.
      </div>
      <SColorPick>
        <SSubTitle>Color</SSubTitle>
        <SColorList>
          {colors.map((color) => (
            <ColorChoice key={color} $color={color} />
          ))}
        </SColorList>
      </SColorPick>
      <SColorPick>
        <SSubTitle>Size</SSubTitle>
        <SColorList>
          {sizes.map((size) => (
            <SSize key={size}>{size}</SSize>
          ))}
        </SColorList>
      </SColorPick>
      <SActions>
        <Stepper />
        <Button type="primary" size="large">
          Add Cart
        </Button>
        <Button size="large" icon={<FontAwesomeIcon icon={faHeart} />} />
      </SActions>
    </SProductDetailsInformation>
  );
};
