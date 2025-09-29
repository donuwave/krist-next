import { Collapse } from 'antd';
import { styled } from 'styled-components';

export const SProductListFilter = styled(Collapse)`
  & .ant-collapse-item-active .ant-collapse-expand-icon {
    transform: rotate(180deg);
  }

  &.ant-collapse.ant-collapse-icon-position-end
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-expand-icon {
    padding-inline-start: 0;
  }

  .ant-collapse-expand-icon {
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    padding-inline-start: 0;
    height: 0px;
    display: initial;
  }
`;

export const SFilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SCategoryName = styled.div`
  font-weight: 800;
`;
