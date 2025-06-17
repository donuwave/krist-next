import { ReactNode } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col max-w-auto h-[100dvh]">
      <Header />
      <div className="flex max-w-400 mx-auto flex-1 w-[100%] mb-20">{children}</div>
      <Footer />
    </div>
  );
}
