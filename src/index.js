import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const themeMain = createTheme(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeMain}>
      <App />
    </ThemeProvider>
    <CssBaseline />
  </React.StrictMode>,
  document.getElementById('root')
);
