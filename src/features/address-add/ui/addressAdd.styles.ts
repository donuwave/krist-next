import { Button } from 'antd';
import { styled } from 'styled-components';

export const SContainerAddressAdd = styled.div`
  display: grid;
  gap: 32px;
`;

export const SForm = styled.form`
  display: grid;
  gap: 16px;
`;

export const STitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
`;

export const SSubmit = styled(Button)`
  &.ant-btn {
    justify-self: start;
    width: 40%;
  }
`;
