import { styled } from 'styled-components';

interface StepItemProps {
  $isActive: boolean;
}

export const STitleContainer = styled.div<StepItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
`;

export const SIcon = styled.div<StepItemProps>`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.additional};

  svg {
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.background : theme.colors.primary};
  }
`;
