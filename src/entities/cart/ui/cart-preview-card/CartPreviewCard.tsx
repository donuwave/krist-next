import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { SDelete, SImg, SInfo, SPrice, SProductCartPreview } from './cartPreviewCard.styles';

export const CartPreviewCard = () => {
  return (
    <SProductCartPreview>
      <SImg src="/pac.jpg" />
      <SInfo>
        <div>Girls pink Moana Printed dress</div>
        <SPrice>1 x $80.00</SPrice>
        <div>Size: s</div>
      </SInfo>
      <SDelete type="link" icon={<FontAwesomeIcon icon={faTrash} />} />
    </SProductCartPreview>
  );
};
