import { styled } from 'styled-components';

export const SSettingPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
  padding: 18px 0;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const STitle = styled.span`
  font-weight: bold;
`;
