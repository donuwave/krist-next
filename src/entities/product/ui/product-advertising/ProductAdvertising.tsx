import {
  faBoxOpen,
  faCreditCard,
  faFileInvoiceDollar,
  faHeadphones,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { SCard, SImg, SProductAdvertising, STitle } from './productAdvertising.styles';

export const ProductAdvertising = () => {
  return (
    <SProductAdvertising>
      <SCard>
        <SImg icon={faBoxOpen} />
        <div>
          <STitle>Free Shipping</STitle>
          <p>Free shipping for order above $150</p>
        </div>
      </SCard>
      <SCard>
        <SImg icon={faFileInvoiceDollar} />
        <div>
          <STitle>Free Shipping</STitle>
          <p>Free shipping for order above $150</p>
        </div>
      </SCard>
      <SCard>
        <SImg icon={faHeadphones} />
        <div>
          <STitle>Free Shipping</STitle>
          <p>Free shipping for order above $150</p>
        </div>
      </SCard>
      <SCard>
        <SImg icon={faCreditCard} />
        <div>
          <STitle>Free Shipping</STitle>
          <p>Free shipping for order above $150</p>
        </div>
      </SCard>
    </SProductAdvertising>
  );
};
