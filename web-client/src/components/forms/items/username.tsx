import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItemCommonProps, nameWithPrefix } from '.';
import { usernameRule } from '../rules';

export const UsernameFormItem = ({ keyPrefix, showLabel, required, disabled }: FormItemCommonProps) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={showLabel && t('Username')}
      name={nameWithPrefix({ name: 'username', keyPrefix })}
      rules={[usernameRule({ required: Boolean(required) })]}
    >
      <Input type="username" disabled={disabled} placeholder={!showLabel ? t('Username') as string : undefined}/>
    </Form.Item>
  );
};
