import { styled } from 'styled-components';

export const SAddressCard = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
  padding: 16px 0;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SName = styled.span`
  font-weight: bold;
`;

export const SAddition = styled.span`
  font-size: 14px;
`;
