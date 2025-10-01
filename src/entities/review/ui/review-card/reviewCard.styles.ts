import { styled } from 'styled-components';

export const SReviewCard = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const SProfile = styled.div`
  display: flex;
  gap: 8px;
`;

export const SImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SName = styled.span`
  font-size: 16px;
`;

export const SInfo = styled.div`
  display: grid;
  padding-top: 12px;
  gap: 12px;
`;

export const SReviewTitle = styled.h6`
  font-weight: bold;
  font-size: 16px;
`;

export const SSecondary = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
