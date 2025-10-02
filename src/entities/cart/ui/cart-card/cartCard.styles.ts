import { Button } from 'antd';
import { styled } from 'styled-components';

export const SCartCard = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1.5fr 1.2fr;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
`;

export const SPreview = styled.div`
  display: flex;
  gap: 16px;
`;

export const SImg = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
`;

export const SName = styled.span`
  font-weight: bold;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const STotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SDelete = styled(Button)`
  & svg {
    color: ${({ theme }) => theme.colors.error} !important;
  }
`;
