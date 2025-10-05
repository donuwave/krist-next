import { Button } from 'antd';
import { styled } from 'styled-components';

export const SInputButton = styled.div`
  display: flex;
  position: relative;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    position: absolute;
    right: 0;
    border-radius: 0 8px 8px 0;
    height: 48px;
  }
`;
