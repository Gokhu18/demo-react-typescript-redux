// import { createStore, compose } from 'redux';
import { createStore } from 'redux';
import { RootState } from './types/index';
import { rootReducer } from './redux/root-reducer';

// Redux DevTools Extension - http://extension.remotedev.io
declare let window: { devToolsExtension: Function };
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

// const composeEnhancers = (
//   process.env.NODE_ENV === 'development' &&
//   reduxDevTools
// ) || compose;

function configureStore(initialState?: RootState) {
  // configure middleware
  // const middleware = [];

  // compose enhancers
  // const enhancer = composeEnhancers(
  //   applyMiddleware(...middleware)
  // );
  // const enhancer = composeEnhancers();

  // // create store
  // return createStore(
  //   rootReducer,
  //   initialState!,
  //   enhancer
  // );
  return createStore<RootState>(rootReducer, initialState!, reduxDevTools);
}

// pass an optional param to rehydrate state on app start
const INITIAL_STATE = { router: {}, name: 'Rob' };
const store = configureStore(INITIAL_STATE);

// export store singleton instance
export default store;
