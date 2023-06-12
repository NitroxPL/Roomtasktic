import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { assertIsEmail } from 'src/utils/validators';
import { FormItemCommonProps, nameWithPrefix } from '.';
import { ruleFromAsserter } from '../utils/formUtils';

export const EmailFormItem = ({ keyPrefix, showLabel, required, disabled }: FormItemCommonProps) => {
  const { t } = useTranslation();

  return (
    <Form.Item
      label={showLabel && t('Email')}
      name={nameWithPrefix({ name: 'email', keyPrefix })}
      rules={[
        ruleFromAsserter({ required: Boolean(required) },
          t('Please enter correct email'),
          assertIsEmail)
      ]}
    >
      <Input type="email" disabled={disabled} placeholder={!showLabel ? t('Email') as string : undefined}/>
    </Form.Item>
  );
};
