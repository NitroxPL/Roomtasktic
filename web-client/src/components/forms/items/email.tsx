import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { FormItemCommonProps, nameWithPrefix } from '.';
import { emailRule } from '../rules';

export const EmailFormItem = ({ keyPrefix, showLabel, required, disabled }: FormItemCommonProps) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={showLabel && t('Email')}
      name={nameWithPrefix({ name: 'email', keyPrefix })}
      rules={[emailRule({ required: Boolean(required) })]}
    >
      <Input type="email" disabled={disabled} placeholder={!showLabel ? t('Email') as string : undefined}/>
    </Form.Item>
  );
};
