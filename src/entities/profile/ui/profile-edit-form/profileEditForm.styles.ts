import { styled } from 'styled-components';

export const SProfileEditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: max-content;
`;

export const SFull = styled.div`
  grid-column: 1/3;
`;
