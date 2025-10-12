import { styled } from 'styled-components';

export const SOrderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
`;

export const STopInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  align-items: center;
`;

export const SCard = styled.div`
  display: flex;
  gap: 8px;
`;

export const STitle = styled.p`
  font-weight: bold;
`;

export const SProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SStatus = styled.div`
  padding: 8px;
  background: rgba(60, 209, 57, 0.1);
  color: #3cd139;
  border-radius: 8px;
`;

export const SActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SImg = styled.img`
  height: 80px;
`;

export const SStatuses = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SPrice = styled.p`
  justify-self: center;
  font-weight: bold;
`;
