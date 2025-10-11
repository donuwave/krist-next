import { styled } from 'styled-components';

export const STitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 12px;
`;

export const SOrderItem = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
  padding-bottom: 24px;
`;

export const SList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SInfoAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

export const SName = styled.span`
  font-weight: 700;
`;
