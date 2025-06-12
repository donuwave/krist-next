import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={100} height={20} />
    </div>
  );
};
