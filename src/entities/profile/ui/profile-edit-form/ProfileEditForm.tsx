'use client';

import { Form, Input } from 'antd';
import React from 'react';

import { SButton, SForm, SFull, SHeader, SImg, SProfileEditForm } from './profileEditForm.styles';

export const ProfileEditForm = () => {
  return (
    <SProfileEditForm>
      <SForm>
        <Form.Item help="First name">
          <Input placeholder="Input name" size="large" />
        </Form.Item>
        <Form.Item help="First name">
          <Input placeholder="Input last name" size="large" />
        </Form.Item>
        <Form.Item help="First name">
          <Input placeholder="Input phone number" size="large" />
        </Form.Item>
        <Form.Item help="First name">
          <Input placeholder="Input email" size="large" />
        </Form.Item>
        <SFull>
          <Form.Item help="First name">
            <Input placeholder="Input address" size="large" />
          </Form.Item>
        </SFull>
      </SForm>
    </SProfileEditForm>
  );
};
