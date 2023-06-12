import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { assertIsCorrectUsername } from 'src/utils/validators';
import { FormItemCommonProps, nameWithPrefix } from '.';
import { ruleFromAsserter } from '../utils/formUtils';

export const UsernameFormItem = ({ keyPrefix, showLabel, required, disabled }: FormItemCommonProps) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={showLabel && t('Username')}
      name={nameWithPrefix({ name: 'username', keyPrefix })}
      rules={[
        ruleFromAsserter({ required: Boolean(required) },
          t('Please enter correct username'),
          assertIsCorrectUsername)
      ]}
    >
      <Input type="username" disabled={disabled} placeholder={!showLabel ? t('Username') as string : undefined}/>
    </Form.Item>
  );
};
