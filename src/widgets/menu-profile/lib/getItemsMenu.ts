import { ROUTES } from '@/shared/config';

export const getItemsMenu = () => {
  return [
    { key: ROUTES.PROFILE, label: 'Personal Information' },
    { key: ROUTES.ORDER, label: 'My Orders' },
    { key: ROUTES.WISHLIST, label: 'My Wishlist' },
    { key: ROUTES.PAYMENTS_CARDS, label: 'My payments cards' },
    { key: ROUTES.SETTINGS, label: 'Settings' },
    { key: ROUTES.ADDRESS, label: 'Manage Addresses' },
  ];
};
