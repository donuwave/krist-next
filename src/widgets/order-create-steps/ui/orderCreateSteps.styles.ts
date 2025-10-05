import { Button } from 'antd';
import { styled } from 'styled-components';

interface StepItemProps {
  $isActive: boolean;
}

export const STitleContainer = styled.div<StepItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-weight: 700;
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

export const SStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
`;

export const SList = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
`;

export const SSetStageButton = styled(Button)`
  &.ant-btn {
    width: 40%;
  }
`;

export const STitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
`;

export const STitleOrderCreate = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding: 28px 0;
`;
