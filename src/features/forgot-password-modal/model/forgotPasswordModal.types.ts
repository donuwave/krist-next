import { ModalProps } from 'antd';

export interface ForgotPasswordModalProps extends ModalProps {
  onBackLogin: () => void;
}
