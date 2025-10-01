import { Tabs } from 'antd';
import React from 'react';

import { ReviewCreate } from '@/features/review-create';
import { ReviewList } from '@/features/review-list';

import { SAdditionalInformation, SPoint, SReviews, STitle } from './productTabs.styles';

export const ProductTabs = () => {
  return (
    <Tabs
      items={[
        {
          key: '1',
          children: (
            <div>
              Универсальная обувь с голенищем, закрывающим щиколотку, защищающая от непогоды и
              обеспечивающая комфорт. Они могут быть изготовлены из кожи, замши или текстиля и
              оснащены шнурками, молнией или эластичными вставками для фиксации стопы.
            </div>
          ),
          label: 'Descriptions',
        },
        {
          key: '2',
          children: (
            <SAdditionalInformation>
              <SPoint>
                <STitle>Color</STitle>
                <span>Red, Blue, Green, Yellow, Purple</span>
              </SPoint>
              <SPoint>
                <STitle>Size</STitle>
                <span>S, M, L, XL, XXL</span>
              </SPoint>
            </SAdditionalInformation>
          ),
          label: 'Additional information',
        },
        {
          key: '3',
          children: (
            <SReviews>
              <ReviewList />
              <ReviewCreate />
            </SReviews>
          ),
          label: 'Reviews',
        },
      ]}
    />
  );
};
