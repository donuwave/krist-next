'use client';

import { styled } from 'styled-components';

export const SLoginForm = styled.form`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const STitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const STitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const SDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;
