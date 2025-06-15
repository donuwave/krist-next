import { ReactNode } from 'react';

import { Header } from '@/widgets/header';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <div className="flex max-w-400 mx-auto">{children}</div>
    </>
  );
}
