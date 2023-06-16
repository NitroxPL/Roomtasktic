import type { Rule } from 'antd/lib/form';
import { useTranslation } from 'react-i18next';
import { assertIsCorrectUsername } from 'src/utils/validators';
import { RuleArgs } from '.';

export const usernameRule = ({ required }: RuleArgs): Rule => {
  const { t } = useTranslation();

  return ({
    required,
    message: t('Please enter correct username') as string,
    validator: (_, value: string) => (
      (!required && !value) || assertIsCorrectUsername(value)
        ? Promise.resolve()
        : Promise.reject()
    ),
  });
};
