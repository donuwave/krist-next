'use client';

import { styled } from 'styled-components';

export const SLayout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  align-items: center;
  height: 100dvh;
`;

export const SPreview = styled.img`
  width: 100%;
  height: 100dvh;
  object-fit: cover;
  object-position: center top;
`;
