'use client';

import { styled } from 'styled-components';

export const SHeader = styled.header`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
`;

export const SActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;
  cursor: pointer;
`;
