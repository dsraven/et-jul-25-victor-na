import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import AppRouter from './router/AppRouter';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
