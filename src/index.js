import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myTheme = {
  ...theme,
  fonts: {
    heading: 'Source Sans Pro, sans-serif',
    subheading: 'Source Sans Pro, sans-serif',
    body: 'Source Sans Pro, sans-serif',
  },
  color: {
    heading: '#002240',
  },
  fontSizes: {
    '3xl': '58px',
    '2xl': '32px',
    xl: '28px',
    lg: '21px',
    md: '18px',
    sm: '16px',
  },
  lineHeights: {
    tall: '24px',
    taller: '32px',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
