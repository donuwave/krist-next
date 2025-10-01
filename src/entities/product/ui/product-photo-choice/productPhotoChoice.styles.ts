import { styled } from 'styled-components';

export const SProductPhotoChoice = styled.div`
  display: grid;
  gap: 20px;
`;

export const SImg = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

export const SSmallPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

interface SPreviewProps {
  $isSelected: boolean;
}

export const SPreview = styled.div<SPreviewProps>`
  border: ${({ $isSelected }) => ($isSelected ? '1px solid red' : '1px solid transparent')};
  object-fit: contain;
  cursor: pointer;
`;
