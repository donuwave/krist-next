import { Input } from 'antd';
import React from 'react';

import { SButton, SInputButton } from './inputButton.styles';

export const InputButton = () => {
  return (
    <SInputButton>
      <Input size="large" placeholder="Input discount code" />
      <SButton type="primary" size="large">
        Apply
      </SButton>
    </SInputButton>
  );
};
