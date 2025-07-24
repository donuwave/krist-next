'use client';

import { styled } from 'styled-components';

export const SForgotPasswordEmailForm = styled.form`
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

export const STitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const SDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;
