import { Button } from 'antd';
import { styled } from 'styled-components';

export const SStepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 8px;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    font-size: 20px;
    padding: 0 15px 5px 15px;

    &:hover,
    &:active,
    &:focus,
    &:disabled {
      background: transparent;
      border-color: transparent !important;
      outline: none;
      box-shadow: none;
    }
  }
`;

export const SValue = styled.p`
  font-size: 16px;
  min-width: 30px;
  text-align: center;
`;
