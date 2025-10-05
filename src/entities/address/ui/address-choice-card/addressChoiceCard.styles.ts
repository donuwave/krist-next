import { styled } from 'styled-components';

interface SCardProps {
  $checked: boolean;
}

export const SCard = styled.div<SCardProps>`
  min-width: 50%;
  border: 1px solid ${({ theme, $checked }) => ($checked ? theme.colors.primary : 'transparent')};
  background: ${({ theme }) => theme.colors.additional};
  padding: 12px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`;

export const STitle = styled.h4`
  font-weight: 700;
  font-style: 16px;
`;

export const SUp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 12px;
`;
