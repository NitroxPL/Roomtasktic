import { Form } from "antd";
import { FormProps } from ".";
import { EmailFormItem,PasswordFormItem } from "./items";

export type UserLoginFormFields = {
  email: string;
  password: string;
};

export const UserLoginForm = ({
  disabled,
  form,
}: FormProps<UserLoginFormFields>) => {
  return (
    <Form form={form} layout="vertical">
        <EmailFormItem required disabled={disabled} />
        <PasswordFormItem required disabled={disabled} />
    </Form>
  );
};
