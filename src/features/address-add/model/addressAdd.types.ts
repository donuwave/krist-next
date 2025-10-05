import { ChangeEvent } from 'react';

export interface IAddressAddProps {
  name: string;
  address: string;
  mobile: string;
  city: string;
}

export interface HandleChangeProps {
  e: ChangeEvent<HTMLInputElement>;
  key: keyof IAddressAddProps;
}
