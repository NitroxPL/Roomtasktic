import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { assertIsStrongPassword } from 'src/utils/validators';
import { FormItemCommonProps, nameWithPrefix } from '.';
import { ruleFromAsserter } from '../utils/formUtils';
export const PasswordFormItem = ({ keyPrefix, showLabel, required, disabled }: FormItemCommonProps) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={showLabel && t('Password')}
      name={nameWithPrefix({ name: 'password', keyPrefix })}
      rules={[
        ruleFromAsserter({ required: Boolean(required) },
          t('Please enter correct password'),
          assertIsStrongPassword)
      ]}
    >
      <Input type="password" disabled={disabled} placeholder={!showLabel ? t('Password') as string : undefined}/>
    </Form.Item>
  );
};
