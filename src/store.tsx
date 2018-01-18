// import { createStore, compose } from 'redux';
import { createStore } from 'redux';
import { StoreState } from './types/index';
// import { rootReducer, RootState } from './redux/root-reducer';
import { rootReducer } from './redux/root-reducer';

// Redux DevTools Extension - http://extension.remotedev.io
declare let window: { devToolsExtension: Function };
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

// const composeEnhancers = (
//   process.env.NODE_ENV === 'development' &&
//   reduxDevTools
// ) || compose;

function configureStore(initialState?: StoreState) {
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
  return createStore<StoreState>(rootReducer, initialState!, reduxDevTools);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
