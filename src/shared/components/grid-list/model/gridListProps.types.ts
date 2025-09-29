import React from 'react';

export interface GridListProps<D> {
  data: D[];
  itemContent: (index: number, item: D) => React.ReactNode;
  isPending: boolean;
  isError: boolean;
  itemLoadingContent?: (key: number) => React.ReactNode;
  itemLoadingSize?: number;
}
