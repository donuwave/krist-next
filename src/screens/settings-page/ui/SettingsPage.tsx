'use client';

import { Switch } from 'antd';

import { ThemeToggle } from '@/entities/global-settings';

import { SCard, SInfo, SSettingPage, STitle } from './settingsPage.styles';

//TODO: добавить выбор языка
export const SettingsPage = () => {
  return (
    <SSettingPage>
      <ThemeToggle />
      <SCard>
        <SInfo>
          <STitle>Two-factor Authentication</STitle>
          <span>Keep your account secure by enabling 2FA via mail</span>
        </SInfo>
        <Switch />
      </SCard>
      <SCard>
        <SInfo>
          <STitle>Push Notification</STitle>
          <span>Receive push notification</span>
        </SInfo>
        <Switch />
      </SCard>
      <SCard>
        <SInfo>
          <STitle>Desktop Notification</STitle>
          <span>Receive push notification in desktop</span>
        </SInfo>
        <Switch />
      </SCard>
      <SCard>
        <SInfo>
          <STitle>Email Notification</STitle>
          <span>Receive email notification</span>
        </SInfo>
        <Switch />
      </SCard>
    </SSettingPage>
  );
};
