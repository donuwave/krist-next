import { object, string } from 'yup';

export const validationSchema = object({
  email: string().email('Неверный email').required('Обязательное поле'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Введите пароль'),
});
