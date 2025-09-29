'use client';

import { Button } from 'antd';
import { styled } from 'styled-components';

import { SButtonProps } from '../model/menu.types';

export const SMenu = styled.div`
  display: flex;
  align-content: center;
  gap: 16px;
`;

export const SButton = styled(Button)<SButtonProps>`
  &.ant-btn-color-link {
    color: ${({ $selectedLink, theme }) =>
      $selectedLink ? theme.colors.secondary : ''} !important;
  }
`;
