import { object, string } from 'yup';

export const validationSchema = object({
  otp: string().min(6, 'Неверный формат').required('Обязательное поле'),
});
