import { Form, Input, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useFormik } from 'formik';
import { ChangeEvent } from 'react';

import { SForm, SRate, SReviewCreate, SSubmit, STitle } from './reviewCreate.styles';
import { reviewInitialValues } from '../lib/reviewInitialValues';
import { validationSchema } from '../lib/validationSchema';

//TODO: неавторизованный пользователь может оставить комментарий
export const ReviewCreate = () => {
  const { values, setValues, handleSubmit, touched, errors } = useFormik({
    initialValues: reviewInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, name: e.target.value });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleChangeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, review: e.target.value });
  };

  const handleChangeRate = (value: number) => {
    setValues({ ...values, rate: value });
  };

  return (
    <SReviewCreate onSubmit={handleSubmit}>
      <STitle>Add your Review</STitle>

      <SForm>
        <SRate>
          <div>Your Rating</div>
          <Form.Item
            validateStatus={touched.rate && errors.rate ? 'error' : ''}
            help={touched.rate && errors.rate ? errors.rate : ''}
          >
            <Rate onChange={handleChangeRate} value={values.rate || 0} />
          </Form.Item>
        </SRate>

        <Form.Item
          validateStatus={touched.name && errors.name ? 'error' : ''}
          help={touched.name && errors.name ? errors.name : 'Name'}
        >
          <Input
            onChange={handleChangeName}
            value={values.name}
            size="large"
            placeholder="Enter your name"
          />
        </Form.Item>
        <Form.Item
          validateStatus={touched.email && errors.email ? 'error' : ''}
          help={touched.email && errors.email ? errors.email : 'Email'}
        >
          <Input
            onChange={handleChangeEmail}
            value={values.email}
            size="large"
            placeholder="Enter your email"
          />
        </Form.Item>
        <Form.Item
          validateStatus={touched.review && errors.review ? 'error' : ''}
          help={touched.review && errors.review ? errors.review : 'Review'}
        >
          <TextArea
            onChange={handleChangeReview}
            value={values.review}
            count={{
              max: 1024,
              show: ({ count }) => <div>{count} / 1024</div>,
            }}
            autoSize={{ minRows: 3, maxRows: 3 }}
            placeholder="Enter your review"
          />
        </Form.Item>
      </SForm>

      <SSubmit htmlType="submit" size="large" type="primary">
        Submit
      </SSubmit>
    </SReviewCreate>
  );
};
