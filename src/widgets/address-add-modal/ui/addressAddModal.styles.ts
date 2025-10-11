import { Button } from 'antd';
import { styled } from 'styled-components';

export const SAddNewAddress = styled(Button)`
  &.ant-btn {
    max-width: 300px;
  }
`;

export const SFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
