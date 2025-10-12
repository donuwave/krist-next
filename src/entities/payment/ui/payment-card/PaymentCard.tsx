import { Button, Checkbox } from 'antd';
import React, { FC, useState } from 'react';

import { SActions, SImg, SImgContainer, SInfo, SName, SPaymentCard } from './paymentCard.styles';

interface PaymentCardProps {
  onChoice?: () => void;
}

export const PaymentCard: FC<PaymentCardProps> = ({ onChoice }) => {
  const [checked, setChecked] = useState(false);

  const handleSetChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <SPaymentCard onClick={handleSetChecked}>
      <SImgContainer>
        <SImg src="/master-card.png" alt="" />
      </SImgContainer>
      <SInfo>
        <SName>Master Card</SName>
        <span>3056 0233 1223 2442</span>
      </SInfo>
      <SActions>
        {onChoice && <Checkbox checked={checked}>Choice</Checkbox>}
        <Button size="middle">Delete</Button>
      </SActions>
    </SPaymentCard>
  );
};
