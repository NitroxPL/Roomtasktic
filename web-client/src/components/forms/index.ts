import { FormInstance } from "antd";

export * from "./UserLoginForm";
export * from "./UserRegisterForm";

export type FormProps<T> = {
  form: FormInstance<T>;
  // eslint-disable-next-line no-unused-vars
  onValuesChange?: (changedValues: Partial<T>, allValues: T) => void;
  disabled?: boolean;
};
