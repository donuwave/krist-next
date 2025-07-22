import { ReactNode } from 'react';

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return <div>{children}</div>;
}
