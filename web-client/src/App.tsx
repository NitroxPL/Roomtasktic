import { useTranslation } from 'react-i18next';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from './config';

const App = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>{t('App')}</Typography>
    </ThemeProvider>
  );
}

export default App;
