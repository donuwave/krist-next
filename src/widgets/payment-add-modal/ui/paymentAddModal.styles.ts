import { Button } from 'antd';
import { styled } from 'styled-components';

export const SAddNewCard = styled(Button)`
  &.ant-btn {
    min-width: 30%;
  }
`;

export const SFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
