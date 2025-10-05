import { object, ObjectSchema, string } from 'yup';

import { IAddressAddProps } from '../model/addressAdd.types';

export const validationSchema: ObjectSchema<IAddressAddProps> = object({
  name: string().required('Обязательное поле'),
  address: string().required('Обязательное поле'),
  mobile: string().required('Обязательное поле'),
  city: string().required('Обязательное поле'),
});
