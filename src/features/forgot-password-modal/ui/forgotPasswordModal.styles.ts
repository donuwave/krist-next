import { Modal } from 'antd';
import { styled } from 'styled-components';

export const SModal = styled(Modal)``;

export const SModalFooter = styled.div`
  display: grid;
  width: 100%;
`;

export const SModalContent = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
`;

export const STitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const SDescription = styled.span`
  font-size: 16px;
  padding-bottom: 40px;
`;
