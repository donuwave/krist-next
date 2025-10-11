'use client';

import { Formik } from 'formik';
import { FC } from 'react';

import { AddressAddForm, IAddressAdd } from '@/entities/address';

import { SContainerAddressAdd, STitle } from './addressAdd.styles';
import { initialValues } from '../lib/initialValues';
import { validationSchema } from '../lib/validationSchema';
import { AddressAddProps } from '../model/addressAdd.types';

export const AddressAdd: FC<AddressAddProps> = ({ footer }) => {
  return (
    <SContainerAddressAdd>
      <STitle>Add a new address</STitle>

      <Formik<IAddressAdd>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => <AddressAddForm footer={footer} />}
      </Formik>
    </SContainerAddressAdd>
  );
};
