'use client';

import React, { useState } from 'react';

import { AddressCard } from '@/entities/address';
import { AddressAddModal } from '@/widgets/address-add-modal';

import { SAddressPage, SList } from './addressPage.styles';

export const AddressPage = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <SAddressPage>
      <AddressAddModal open={open} onOpen={toggleOpen} onCancel={toggleOpen} />

      <SList>
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </SList>
    </SAddressPage>
  );
};
