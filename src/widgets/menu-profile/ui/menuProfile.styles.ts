import { Menu } from 'antd';
import { styled } from 'styled-components';

export const SMenuProfile = styled(Menu)`
  display: grid;
  height: max-content;
  border: 1px solid ${({ theme }) => theme.colors.additional};
`;

export const SMenuHeader = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.additional};
  border-right: 1px solid ${({ theme }) => theme.colors.additional};
  border-top: 1px solid ${({ theme }) => theme.colors.additional};
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const SImg = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 9999px;
`;

export const SName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
