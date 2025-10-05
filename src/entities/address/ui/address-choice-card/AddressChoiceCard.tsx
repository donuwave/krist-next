import { Button, Checkbox } from 'antd';
import { MouseEvent, useState } from 'react';

import { SActions, SCard, STitle, SUp } from './addressChoiceCard.styles';
//TODO: нужно будет выбрать только одну карточку
export const AddressChoiceCard = () => {
  const [checked, setChecked] = useState(false);

  const handleChangeChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleEditAddress = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('hanldeDeleteAddress');
  };

  const handleDeleteAddress = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log('hanldeDeleteAddress');
  };

  return (
    <SCard onClick={handleChangeChecked} $checked={checked}>
      <SUp>
        <STitle>Robert Fox</STitle>
        <Checkbox checked={checked} onChange={handleChangeChecked} />
      </SUp>
      <div>4517 Washington Ave. Manchester, Kentucky 39423</div>
      <SActions>
        <Button onClick={handleEditAddress} type="default">
          Edit
        </Button>
        <Button onClick={handleDeleteAddress}>Delete</Button>
      </SActions>
    </SCard>
  );
};
