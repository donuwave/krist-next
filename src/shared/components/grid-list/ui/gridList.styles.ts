import { Pagination } from 'antd';
import { styled } from 'styled-components';

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SGridList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: max-content;
  gap: 30px;
  padding-bottom: 30px;
`;

export const SPagination = styled(Pagination)`
  align-self: end;
`;
