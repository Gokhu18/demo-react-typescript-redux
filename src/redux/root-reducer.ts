import { combineReducers } from 'redux';
import { RootState } from '../types/index';

// Reducers
import { routerReducer as router } from 'react-router-redux';
import { enthusiasm } from './reducers/index';

export const rootReducer = combineReducers<RootState>({
  router,
  enthusiasm
});
