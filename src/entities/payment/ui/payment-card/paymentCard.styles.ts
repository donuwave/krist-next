import { styled } from 'styled-components';

export const SPaymentCard = styled.div`
  display: grid;
  align-items: center;
  gap: 8px;
  grid-template-columns: 70px 1fr 100px;
  cursor: pointer;
`;

export const SImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 50px;
  background: ${({ theme }) => theme.colors.additional};
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SName = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

export const SImg = styled.img`
  width: 30px;
  object-fit: cover;
`;
