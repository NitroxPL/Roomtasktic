export * from "./email";
export * from "./password";
export * from "./username";

export type FormItemCommonProps = {
  keyPrefix?: string;
  showLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
};

type NameWithPrefixArgs = {
  keyPrefix?: string;
  name: string;
};

export const nameWithPrefix = ({ keyPrefix, name }: NameWithPrefixArgs) =>
  keyPrefix ? [keyPrefix, name] : name;
