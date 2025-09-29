import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';

export const SProductAdvertising = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 70px;
`;

export const SImg = styled(FontAwesomeIcon).attrs({
  size: '2x',
})``;

export const SCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
  justify-content: start;
`;

export const STitle = styled.h4`
  font-weight: 900;
`;
