import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet>
        <title>Civil Box</title>
        <meta name="description" content="An E-Commerce portal from Chennai to buy all the construction materials"/>
        <link rel='canonical' href='https://civilbox.in/'/>
      </Helmet>
      <App/>
      <GlobalStyle/>
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root')
);
