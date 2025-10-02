import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Stepper } from '@/shared/components';

import { SCartCard, SDelete, SImg, SInfo, SName, SPreview, STotal } from './cartCard.styles';

export const CartCard = () => {
  return (
    <SCartCard>
      <SPreview>
        <SImg src="/pac.jpg" />
        <SInfo>
          <SName>Girls pink Moana Printed dress</SName>
          <div>Size: s</div>
        </SInfo>
      </SPreview>
      <div>$80.00</div>
      <Stepper />
      <STotal>
        <div>$80.00</div>
        <SDelete type="link" icon={<FontAwesomeIcon icon={faTrash} />} />
      </STotal>
    </SCartCard>
  );
};
