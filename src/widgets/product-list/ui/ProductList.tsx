import React from 'react';

import { ProductCard } from '@/entities/product';
import { GridList, GridListProps } from '@/shared/components';

export const ProductList = () => {
  //TODO: исправить использование _
  const itemContent: GridListProps<{ key: number }>['itemContent'] = (_, el) => {
    return <ProductCard />;
  };

  return (
    <GridList<{ key: number }>
      isPending={false}
      data={[{ key: 1 }, { key: 1 }, { key: 1 }, { key: 1 }]}
      isError={false}
      itemContent={itemContent}
    />
  );
};
