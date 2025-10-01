import { Rate } from 'antd';
import React from 'react';

import {
  SImg,
  SInfo,
  SName,
  SProfile,
  SResult,
  SReviewCard,
  SReviewTitle,
  SSecondary,
} from './reviewCard.styles';

export const ReviewCard = () => {
  return (
    <SReviewCard>
      <SProfile>
        <SImg src="/pac.jpg" />
        <SResult>
          <SName>Mark</SName>
          <Rate disabled value={4} />
        </SResult>
      </SProfile>

      <SInfo>
        <SReviewTitle>Excellent product</SReviewTitle>
        <div>
          This product is so beautiful. I going to buy more this product for my child.This product
          is so beautiful. I going to buy more this product for my child.This product is so
          beautiful. I going to buy more this product for my child.This product is so beautiful. I
          going to buy more this product for my child.This product is so beautiful. I going to buy
          more this product for my child.
        </div>
        <div>
          <SSecondary>Posted on</SSecondary> <span>June 16, 2024 </span>
        </div>
      </SInfo>
    </SReviewCard>
  );
};
