import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import reducers from '../root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store);
