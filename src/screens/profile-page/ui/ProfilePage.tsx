'use client';

import React from 'react';

import { ProfileEditForm } from '@/entities/profile';

import { SButton, SHeader, SImg, SProfilePage } from './profilePage.styles';

export const ProfilePage = () => {
  return (
    <SProfilePage>
      <SHeader>
        <SImg src="/forgot-password.png" />
        <SButton size="large" type="primary">
          Edit Profile
        </SButton>
      </SHeader>

      <ProfileEditForm />
    </SProfilePage>
  );
};
