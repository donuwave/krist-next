'use client';

import { Button, Modal } from 'antd';
import { FC } from 'react';

import { AddressAdd } from '@/features/address-add';

import { SAddNewAddress, SFooter } from './addressAddModal.styles';
import { AddressAddModalProps } from '../model/addressAddModal.types';

export const AddressAddModal: FC<AddressAddModalProps> = ({ open, onCancel, onOpen }) => {
  return (
    <>
      <SAddNewAddress onClick={onOpen} size="large" type="primary">
        + Add New Address
      </SAddNewAddress>

      <Modal footer={null} centered width="430px" open={open} onCancel={onCancel}>
        <AddressAdd
          footer={
            <SFooter>
              <Button onClick={onCancel} size="large">
                Cancel
              </Button>
              <Button htmlType="submit" size="large" type="primary">
                Add New Address
              </Button>
            </SFooter>
          }
        />
      </Modal>
    </>
  );
};
