'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import { css, keyframes, styled } from 'styled-components';

import { FavoriteButtonProps, FavoriteIconProps } from '../../model/productCard.types';

export const SProductCard = styled.div`
  display: grid;
  width: 100%;
`;

export const SInfo = styled.div`
  padding-top: 16px;
`;

export const SName = styled.div`
  font-weight: 800;
`;

export const SAddCard = styled(Button)`
  &.ant-btn {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    width: auto;
  }
`;

export const SImg = styled.div`
  width: 100%;
  position: relative;
  height: 250px;
  background-image: url('./shirt.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const singleBeat = keyframes`
  0%   { transform: scale(1); }
  50%  { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const SFavoriteIcon = styled(FontAwesomeIcon)<FavoriteIconProps>`
  ${({ $isBeating }) =>
    $isBeating &&
    css`
      animation: ${singleBeat} 0.6s ease-in-out;
    `}
`;

export const SFavorite = styled(Button)<FavoriteButtonProps>`
  &.ant-btn {
    border-radius: 100%;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  & .ant-btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;
    color: ${({ $isFavorite }) => ($isFavorite ? 'black' : '#FFD43B')};
  }
`;
