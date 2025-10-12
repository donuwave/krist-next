import { Button, Form } from 'antd';
import { styled } from 'styled-components';

export const SPaymentAddContainer = styled.form``;

export const STitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 18px;
`;

export const SPaymentAdd = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding-bottom: 24px;
`;

export const SFullField = styled(Form.Item)`
  grid-column: 1/3;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    margin-top: 16px;
    min-width: 40%;
  }
`;
