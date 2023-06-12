import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItemCommonProps, nameWithPrefix } from '.';
import { passwordRule } from '../rules';

export const PasswordFormItem = ({ keyPrefix, showLabel, required, disabled }: FormItemCommonProps) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={showLabel && t('Password')}
      name={nameWithPrefix({ name: 'password', keyPrefix })}
      rules={[passwordRule({ required: Boolean(required) })]}
    >
      <Input type="password" disabled={disabled} placeholder={!showLabel ? t('Password') as string : undefined}/>
    </Form.Item>
  );
};
