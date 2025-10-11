import { Button } from 'antd';
import React from 'react';

import { SActions, SAddition, SAddressCard, SInfo, SName } from './addressCard.styles';

export const AddressCard = () => {
  return (
    <SAddressCard>
      <SInfo>
        <SName>Robert Fox</SName>
        <SAddition>4517 Washington Ave. Manchester, Kentucky 39495</SAddition>
        <SAddition>+ 7 (905) 756 54-75</SAddition>
      </SInfo>
      <SActions>
        <Button size="middle">Edit</Button>
        <Button type="primary" size="middle">
          Delete
        </Button>
      </SActions>
    </SAddressCard>
  );
};
