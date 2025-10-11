import { Form, Input } from 'antd';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

import { IAddressAdd, HandleChangeProps, IAddressProps } from '@/entities/address';

import { SForm } from './addressAddForm.styles';

export const AddressAddForm: FC<IAddressProps> = ({ footer }) => {
  const { setValues, values, handleSubmit, errors, touched } = useFormikContext<IAddressAdd>();

  const handleChange = ({ e, key }: HandleChangeProps) => {
    setValues({ ...values, [key]: e.target.value });
  };

  return (
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

      {footer}
    </SForm>
  );
};
