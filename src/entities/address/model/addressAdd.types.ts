import { ChangeEvent, ReactNode } from 'react';

export interface IAddressAdd {
  name: string;
  address: string;
  mobile: string;
  city: string;
}

export interface IAddressProps {
  footer: ReactNode;
}

export interface HandleChangeProps {
  e: ChangeEvent<HTMLInputElement>;
  key: keyof IAddressAdd;
}
