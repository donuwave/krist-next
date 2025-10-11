import { Button } from 'antd';
import { styled } from 'styled-components';

export const SProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const SImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 999px;
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SButton = styled(Button)`
  &.ant-btn {
    min-width: 150px;
  }
`;
