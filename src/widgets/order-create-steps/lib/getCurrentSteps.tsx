import { faCreditCard, faFile, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { GetCurrentItemsProps } from '../model/orderCreateStepts.types';
import { SIcon, STitleContainer } from '../ui/orderCreateSteps.styles';

export const STEP_LABELS = ['Address', 'Payment Method', 'Review'];
const STEP_ICONS = [faHouse, faCreditCard, faFile];

export const getCurrentItems = ({ current, stepStatuses }: GetCurrentItemsProps) => {
  return stepStatuses.map((status, index) => {
    const isActive = index === current;
    const isFinishedOrActive = status === 'finish' || isActive;

    return {
      title: (
        <STitleContainer $isActive={isFinishedOrActive}>
          <SIcon $isActive={isFinishedOrActive}>
            <FontAwesomeIcon size="2x" icon={STEP_ICONS[index]} />
          </SIcon>
          <div>{STEP_LABELS[index]}</div>
        </STitleContainer>
      ),
      status,
      icon: <div></div>,
    };
  });
};
