import { StageProvider } from '@/entities/auth';
import { ForgotPasswordPage } from '@/screens/forgot-password-page';

export default function Page() {
  return (
    <StageProvider>
      <ForgotPasswordPage />
    </StageProvider>
  );
}
