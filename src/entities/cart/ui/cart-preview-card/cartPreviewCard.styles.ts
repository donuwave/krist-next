import { Button } from 'antd';
import { styled } from 'styled-components';

export const SProductCartPreview = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr 40px;
  gap: 16px;
  padding-bottom: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
`;

export const SImg = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SPrice = styled.span`
  font-weight: bold;
`;

export const SDelete = styled(Button)`
  align-self: end;

  & svg {
    color: ${({ theme }) => theme.colors.error} !important;
  }
`;
