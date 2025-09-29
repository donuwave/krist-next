'use client';

import React from 'react';

import { SContainer, SGridList, SPagination } from './gridList.styles';
import { GridListProps } from '../model/gridListProps.types';

export const GridList = <D,>({
  data,
  itemContent,
  isError,
  isPending,
  itemLoadingSize = 9,
  itemLoadingContent,
}: GridListProps<D>) => {
  //TODO: Можно сделать заглушку
  if (isError) return <div>Ошибка</div>;
  if (isPending)
    return Array.from({ length: itemLoadingSize }, (_, i) => (
      <React.Fragment key={`skeleton-${i}`}>
        {itemLoadingContent && itemLoadingContent(i)}
      </React.Fragment>
    ));

  return (
    <SContainer>
      <SGridList>
        {data.map((item, index) => (
          <React.Fragment key={index}>{itemContent(index, item)}</React.Fragment>
        ))}
      </SGridList>
      <SPagination total={50} pageSize={15} />
    </SContainer>
  );
};
