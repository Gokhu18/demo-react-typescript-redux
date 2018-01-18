import { createStore, applyMiddleware, compose } from 'redux';
import { RootState, ENTHUSIASM_STATE_INITIAL_STATE } from './types/index';
import { rootReducer } from './redux/root-reducer';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Redux DevTools Extension - http://extension.remotedev.io
declare let window: { devToolsExtension: Function };
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

export const history = createHistory();
history.listen((location, action) => {
  /* EXAMPLE: Google Analytics on each route change */
});

function configureStore(initialState?: RootState) {
  const middleware = [
    routerMiddleware(history)
  ];

  // compose enhancers
  const enhancer = compose(
    applyMiddleware(...middleware),
    ...reduxDevTools
  );

  return createStore<RootState>(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const INITIAL_STATE: RootState = { 
  router: {}, 
  enthusiasm: ENTHUSIASM_STATE_INITIAL_STATE 
};

const store = configureStore(INITIAL_STATE);

// export store singleton instance
export default store;
