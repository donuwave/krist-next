'use client';

import { Breadcrumb } from 'antd';
import Link from 'next/link';
import React from 'react';

import { ProductAdvertising } from '@/entities/product';
import { ROUTES } from '@/shared/config';
import { ProductList } from '@/widgets/product-list';
import { ProductListFilter } from '@/widgets/product-list-filter';

import { SProductListPage } from './productListPage.styles';

export const ProductListPage = () => {
  //TODO: Подумать над перееносом Breadcrumb в лаяут или в глобальную функцию
  const items = [
    {
      title: (
        <Link style={{ color: 'black' }} href={ROUTES.HOME}>
          Home
        </Link>
      ),
    },
    {
      title: (
        <Link style={{ color: 'black' }} href={ROUTES.PRODUCTS_LIST}>
          All products
        </Link>
      ),
    },
  ];

  return (
    <>
      <div style={{ paddingLeft: 16, paddingTop: 48 }}>
        <Breadcrumb items={items} />
      </div>

      <SProductListPage>
        <ProductListFilter />
        <ProductList />
      </SProductListPage>

      <ProductAdvertising />
    </>
  );
};
