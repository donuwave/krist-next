'use client';

import React from 'react';

import {
  ProductAdvertising,
  ProductDetailsInformation,
  ProductPhotoChoice,
} from '@/entities/product';
import { ProductTabs } from '@/widgets/product-tabs';

import { SProduct, SProductDetailsPage } from './productDetailsPage.styles';

export const ProductDetailsPage = () => {
  return (
    <SProductDetailsPage>
      <SProduct>
        <ProductPhotoChoice />
        <ProductDetailsInformation />
      </SProduct>

      <ProductTabs />

      <ProductAdvertising />
    </SProductDetailsPage>
  );
};
