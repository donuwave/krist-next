import { styled } from 'styled-components';

export const SProductOrder = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SImg = styled.img`
  height: 100px;
`;

export const SName = styled.span`
  font-weight: 700;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
