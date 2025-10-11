'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MenuInfo } from 'rc-menu/lib/interface';

import { SImg, SMenuHeader, SMenuProfile, SName } from './menuProfile.styles';
import { getItemsMenu } from '../lib/getItemsMenu';

export const MenuProfile = () => {
  const pathname = usePathname();
  const router = useRouter();

  const items = getItemsMenu();

  const handleSwitchPage = (e: MenuInfo) => router.push(e.key);

  return (
    <div>
      <SMenuHeader>
        <SImg src="/forgot-password.png" />
        <div>
          <span>Hello</span>
          <SName>Robert Fox</SName>
        </div>
      </SMenuHeader>
      <SMenuProfile selectedKeys={[pathname]} items={items} onClick={handleSwitchPage} />
    </div>
  );
};
