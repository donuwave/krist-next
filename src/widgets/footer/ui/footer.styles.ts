import { Input } from 'antd';
import { styled } from 'styled-components';

export const SFooterContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SFooter = styled.footer`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  padding: 40px 0;
`;

export const SInfo = styled.div`
  display: grid;
  gap: 16px;
  max-width: 250px;
`;

export const SServices = styled.div`
  display: grid;
  gap: 12px;
`;

export const STitle = styled.h4`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.background};
`;

export const SInput = styled(Input)`
  &.ant-input {
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
    }

    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${({ theme }) => theme.colors.background};
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SEmailField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
