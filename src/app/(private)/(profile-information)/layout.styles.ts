'use client';

import { styled } from 'styled-components';

export const SLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  padding-top: 42px;
`;

export const SLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 28px;
  padding-bottom: 70px;
`;

export const STitle = styled.h2`
  font-size: 32px;
  font-weight: 300;
`;
