import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import appTheme from './assets/styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

