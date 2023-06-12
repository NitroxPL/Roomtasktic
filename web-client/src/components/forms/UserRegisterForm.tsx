import { Form } from "antd";
import { FormProps } from ".";
import { EmailFormItem, UsernameFormItem } from "./items";
import { PasswordFormItem } from "./items";

export type UserRegisterFormFields = {
  username: string;
  email: string;
  password: string;
};

export const UserRegisterForm = ({
  disabled,
  form,
}: FormProps<UserRegisterFormFields>) => {
  return (
    <Form form={form} layout="vertical">
      <UsernameFormItem showLabel required disabled={disabled} />
      <EmailFormItem showLabel required disabled={disabled} />
      <PasswordFormItem showLabel required disabled={disabled} />
    </Form>
  );
};
