'use client';

import { faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Logo } from '@/shared/components';

import {
  SEmailField,
  SFooter,
  SFooterContainer,
  SInfo,
  SInput,
  SItem,
  SServices,
  STitle,
} from './footer.styles';

export const Footer = () => {
  return (
    <SFooterContainer>
      <SFooter>
        <SInfo>
          <Logo isInverted />
          <SItem>
            <FontAwesomeIcon icon={faPhoneVolume} />
            704 5555-0127
          </SItem>
          <SItem>
            <FontAwesomeIcon icon={faEnvelope} /> krist@google.com
          </SItem>
          <SItem>
            <FontAwesomeIcon icon={faLocationDot} />
            3891 Rancheiwe DR. Richaldson, California 62639
          </SItem>
        </SInfo>
        <SServices>
          <STitle>Information</STitle>
          <div>My account</div>
          <div>Login</div>
          <div>My Cart</div>
          <div>My wishlist</div>
        </SServices>
        <SServices>
          <STitle>Services</STitle>
          <div>About us</div>
          <div>Camera</div>
          <div>Delivery</div>
          <div>Privacy</div>
        </SServices>
        <SEmailField>
          <STitle>Subscribe</STitle>
          <div>
            Enter your email below to be the first to known about new collections and product
            launches
          </div>
          <SInput size="large" placeholder="Your Email" />
        </SEmailField>
      </SFooter>
    </SFooterContainer>
  );
};
