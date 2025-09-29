'use client';

import { styled } from 'styled-components';

export const SLayout = styled.div`
  min-height: 100dvh;
  height: 100%;
  display: grid;
  grid-template-rows: 80px 1fr max-content;
  min-width: 1440px;
`;

export const SContent = styled.div`
  display: grid;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;
