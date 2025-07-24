import { Form, Input } from 'antd';
import { styled } from 'styled-components';

export const SForgotPasswordOtpForm = styled.form`
  max-width: 450px;
  display: grid;
  gap: 30px;
`;

export const STitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const STitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const SDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SWrapperOtp = styled(Form.Item)`
  & .ant-input {
    flex: 1 1 0;
    width: 50px;
    height: 50px;
  }
`;

export const SOtpInput = styled(Input.OTP)``;
