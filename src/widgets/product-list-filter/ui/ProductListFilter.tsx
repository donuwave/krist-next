import { Checkbox, Slider } from 'antd';
import React from 'react';

import { SCategoryName, SFilterItem, SProductListFilter } from './productListFilter.styles';

export const ProductListFilter = () => {
  return (
    <div>
      <SProductListFilter
        ghost
        expandIconPosition="end"
        items={[
          {
            key: 1,
            label: <SCategoryName>Products Categories</SCategoryName>,
            children: (
              <SFilterItem>
                <Checkbox>Men</Checkbox>
                <Checkbox>Women</Checkbox>
                <Checkbox>Kids</Checkbox>
                <Checkbox>Bags</Checkbox>
                <Checkbox>Belts</Checkbox>
                <Checkbox>Wallets</Checkbox>
                <Checkbox>Watches</Checkbox>
                <Checkbox>Winter Wear</Checkbox>
              </SFilterItem>
            ),
          },
          {
            key: 2,
            label: <SCategoryName>Filter by Price</SCategoryName>,
            children: (
              <div>
                <div>Price</div>
                <Slider range defaultValue={[0, 100]} />
              </div>
            ),
          },
          {
            key: 3,
            label: <SCategoryName>Filter by size</SCategoryName>,
            children: (
              <SFilterItem>
                <Checkbox>S</Checkbox>
                <Checkbox>M</Checkbox>
                <Checkbox>L</Checkbox>
                <Checkbox>XL</Checkbox>
                <Checkbox>XXL</Checkbox>
                <Checkbox>XXXL</Checkbox>
              </SFilterItem>
            ),
          },
        ]}
      />
    </div>
  );
};
