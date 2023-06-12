import { assertIsStrongPassword } from 'src/utils/validators';
import type { Rule } from 'antd/lib/form';
import { useTranslation } from 'react-i18next';
import { RuleArgs } from '.';

export const passwordRule = ({ required }: RuleArgs): Rule => {
  const { t } = useTranslation();

  return ({
    required,
    message: t('Please enter correct password') as string,
    validator: (_, value: string) => (
      (!required && !value) || assertIsStrongPassword(value)
        ? Promise.resolve()
        : Promise.reject()
    ),
  });
};
