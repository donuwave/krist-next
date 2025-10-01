import { Button } from 'antd';
import { styled } from 'styled-components';

export const STitle = styled.h4`
  font-weight: bold;
  font-size: 22px;
`;

export const SReviewCreate = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SRate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SSubmit = styled(Button)`
  &.ant-btn {
    max-width: 180px;
  }
`;
