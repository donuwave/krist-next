'use client';

import { useState } from 'react';

import { PaymentCard } from '@/entities/payment';
import { PaymentAddModal } from '@/widgets/payment-add-modal';

import { SList } from './paymentPage.styles';

//TODO: сделать две сущности для формы создания способа оплаты
//TODO: сделать модалку для создания способа оплаты
//TODO: сделать новую карточку для отображения списка способа оплаты
export const PaymentsPage = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <PaymentAddModal open={open} onCancel={handleToggleOpen} onOpen={handleToggleOpen} />

      <SList>
        <PaymentCard />
        <PaymentCard />
      </SList>
    </div>
  );
};
