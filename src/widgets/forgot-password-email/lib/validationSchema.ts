import { object, string } from 'yup';

export const validationSchema = object({
  email: string().email('Неверный email').required('Обязательное поле'),
});
