import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet>
          <title>Civil Box</title>
          <meta
            name='description'
            content='An E-Commerce portal from Chennai to buy all the construction materials'
          />
          <link rel='canonical' href='https://civilbox.in/' />
        </Helmet>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
