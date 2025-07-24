import { object, string } from 'yup';

export const validationSchema = object({
  email: string().email('Неверный email').required('Обязательное поле'),
  password: string().min(6, 'Пароль должен быть не менее 6 символов').required('Введите пароль'),
  firstName: string().min(2, 'Имя должно быть больше 2 символов').required('Введите имя'),
  lastName: string().min(2, 'Фамилия должна быть больше 2 символов').required('Введите фамилию'),
});
