import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Styling
import './index.css';

// Containers
import Hello from './containers/Hello/Hello';

// Redux DevTools Extension - http://extension.remotedev.io
declare let window: { devToolsExtension: Function };
const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
const preloadedState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript & Redux',
};
const store = createStore<StoreState>(enthusiasm, preloadedState, reduxDevTools);

/* Notice that Hello no longer needs props, since we used our connect function to adapt our 
  application's state for our wrapped Hello component's props
*/
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
