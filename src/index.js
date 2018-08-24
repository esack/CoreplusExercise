import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';
import './assets/styles/app.css';
import App from './app';
import theme from './constants/theme';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('index')
);

registerServiceWorker();
