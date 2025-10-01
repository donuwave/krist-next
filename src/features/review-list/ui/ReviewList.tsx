import React from 'react';

import { ReviewCard } from '@/entities/review';

import { SList, STitle } from './reviewList.styles';

export const ReviewList = () => {
  return (
    <SList>
      <STitle>Customer Reviewers</STitle>

      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </SList>
  );
};
