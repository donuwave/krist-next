'use client';

import { Input } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

export const SHome = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Home = () => {
  return (
    <SHome>
      <Input />
      dddd
    </SHome>
  );
};
