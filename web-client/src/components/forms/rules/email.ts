import { assertIsEmail } from 'src/utils/validators';
import type { Rule } from 'antd/lib/form';
import { useTranslation } from 'react-i18next';
import { RuleArgs } from '.';

export const emailRule = ({ required }: RuleArgs): Rule => {
  const { t } = useTranslation();

  return ({
    required,
    message: t('Please enter correct email') as string,
    validator: (_, value: string) => (
      (!required && !value) || assertIsEmail(value)
        ? Promise.resolve()
        : Promise.reject()
    ),
  });
};
