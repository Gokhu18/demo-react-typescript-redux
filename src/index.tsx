import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Styling
import './index.css';

// Containers
import Hello from './containers/Hello/Hello';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

/* Notice that Hello no longer needs props, since we used our connect function to adapt our 
  application's state for our wrapped Hello component's props
*/
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
