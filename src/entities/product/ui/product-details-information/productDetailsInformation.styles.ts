import { styled } from 'styled-components';

export const SProductDetailsInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const STitle = styled.h4`
  font-weight: bold;
  font-size: 32px;
`;

export const SRate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SPrice = styled.div`
  font-size: 26px;
`;

export const SOldPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SColorPick = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SColorList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SSubTitle = styled.h5`
  font-size: 22px;
  font-weight: bold;
`;

interface ColorChoiceProps {
  $color: string;
}

export const ColorChoice = styled.div<ColorChoiceProps>`
  width: 32px;
  height: 32px;
  background: ${({ $color }) => $color};
  border-radius: 6px;
`;

export const SSize = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SActions = styled.div`
  padding-top: 18px;
  display: grid;
  grid-template-columns: max-content 1fr 50px;
  align-items: center;
  gap: 16px;
`;
