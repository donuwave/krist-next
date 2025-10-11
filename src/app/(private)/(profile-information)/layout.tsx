import { ReactNode } from 'react';

import { MenuProfile } from '@/widgets/menu-profile';

import { SLayout, SLayoutContainer, STitle } from './layout.styles';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <SLayoutContainer>
      <STitle>My Profile</STitle>
      <SLayout>
        <MenuProfile />
        {children}
      </SLayout>
    </SLayoutContainer>
  );
}
