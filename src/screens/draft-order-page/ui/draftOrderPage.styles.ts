import { styled } from 'styled-components';

export const SDraftOrderPage = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  gap: 64px;
  padding: 24px 0 48px 0;
`;

export const SDiscount = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
`;

export const SSubtotal = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.additional};
  padding: 18px;
  height: max-content;
`;

export const SSubtotalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
`;

export const SCharge = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
  display: grid;
  gap: 12px;
`;

export const STotal = styled.div`
  padding-top: 12px;
  display: grid;
  gap: 18px;
`;

export const SGrandTotal = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
