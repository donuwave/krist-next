import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';

import { SContainerAddressAdd, SForm, SSubmit, STitle } from './addressAdd.styles';
import { initialValues } from '../lib/initialValues';
import { validationSchema } from '../lib/validationSchema';
import { IAddressAddProps, HandleChangeProps } from '../model/addressAdd.types';

export const AddressAdd = () => {
  const { values, setValues, handleSubmit, touched, errors } = useFormik<IAddressAddProps>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = ({ e, key }: HandleChangeProps) => {
    setValues({ ...values, [key]: e.target.value });
  };

  return (
    <SContainerAddressAdd>
      <STitle>Add a new address</STitle>

      <SForm onSubmit={handleSubmit}>
        <Form.Item
          validateStatus={touched.name && errors.name ? 'error' : ''}
          help={touched.name && errors.name ? errors.name : 'Name is required for this address'}
        >
          <Input
            onChange={(e) => handleChange({ e, key: 'name' })}
            value={values.name}
            placeholder="Name"
            size="large"
          />
        </Form.Item>

        <Form.Item
          validateStatus={touched.mobile && errors.mobile ? 'error' : ''}
          help={touched.mobile && errors.mobile ? errors.mobile : 'Mobile number is required'}
        >
          <Input
            onChange={(e) => handleChange({ e, key: 'mobile' })}
            value={values.mobile}
            placeholder="Mobile phone number"
            size="large"
          />
        </Form.Item>

        <Form.Item
          validateStatus={touched.address && errors.address ? 'error' : ''}
          help={touched.address && errors.address ? errors.address : 'Address is required'}
        >
          <Input
            onChange={(e) => handleChange({ e, key: 'address' })}
            value={values.address}
            placeholder="Address"
            size="large"
          />
        </Form.Item>

        <Form.Item
          validateStatus={touched.city && errors.city ? 'error' : ''}
          help={touched.city && errors.city ? errors.city : 'Name is required'}
        >
          <Input
            onChange={(e) => handleChange({ e, key: 'city' })}
            value={values.city}
            placeholder="City"
            size="large"
          />
        </Form.Item>

        <SSubmit type="primary" size="large" htmlType="submit">
          Add New Address
        </SSubmit>
      </SForm>
    </SContainerAddressAdd>
  );
};
