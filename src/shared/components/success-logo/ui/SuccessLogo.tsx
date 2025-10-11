import React from 'react';

import { SInner, SOther, SSmall } from './successLogo.types';

export const SuccessLogo = () => {
  return (
    <SOther>
      <SInner>
        <SSmall>
          <img src="/current.png" />
        </SSmall>
      </SInner>
    </SOther>
  );
};
