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

export const SOther = styled.div`
  position: relative;
  border-radius: 50%;
  background: rgba(19, 17, 24, 0.05);
  height: 108px;
  width: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SInner = styled.div`
  position: absolute;
  background: rgba(19, 17, 24, 0.1);
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SSmall = styled.div`
  position: absolute;
  background: rgba(19, 17, 24);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
