import { number, object, string } from 'yup';

export const validationSchema = object({
  email: string().email('Неверный email').required('Введите email'),
  name: string().required('Введите имя'),
  review: string().required('Введите комментарий'),
  rate: number().required('Введите рейтинг'),
});
