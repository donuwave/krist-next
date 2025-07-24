'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { ROUTES } from '@/shared/config';
import { getUrl } from '@/shared/lib';

import { SLayout, SPreview } from './layout.styles';

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  const path = usePathname() as keyof typeof ROUTES;
  const url = getUrl(path);

  return (
    <SLayout>
      <SPreview src={url} />
      {children}
    </SLayout>
  );
}
