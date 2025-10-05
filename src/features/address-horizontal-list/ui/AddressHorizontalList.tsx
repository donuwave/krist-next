import React from 'react';

import { AddressChoiceCard } from '@/entities/address';

import { SList, STitle } from './addressHorizontalList.styles';

export const AddressHorizontalList = () => {
  return (
    <div>
      <STitle>Select a delivery address</STitle>
      <p>
        Is the you do like to use displayed below? If so, click the correspondig &#34;Deliver th
        this address&#34; button. Or click the button below.
      </p>

      <SList>
        {Array.from([1, 2, 3]).map((address) => (
          <AddressChoiceCard key={address} />
        ))}
      </SList>
    </div>
  );
};
