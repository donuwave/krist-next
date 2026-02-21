import { object, ObjectSchema, string } from 'yup';

import { IAddressAdd } from '@/entities/address';

export const validationSchema: ObjectSchema<IAddressAdd> = object({
  name: string().required('Обязательное поле'),
  address: string().required('Обязательное поле'),
  mobile: string().required('Обязательное поле'),
  city: string().required('Обязательное поле'),
});
