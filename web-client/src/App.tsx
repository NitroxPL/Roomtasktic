import { useTranslation } from 'react-i18next';
import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {t('App')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
