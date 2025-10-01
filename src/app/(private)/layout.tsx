import { ReactNode } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { SContent, SLayout } from './layout.styles';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <SLayout>
      <Header />
      <SContent>{children}</SContent>
      <Footer />
    </SLayout>
  );
}
