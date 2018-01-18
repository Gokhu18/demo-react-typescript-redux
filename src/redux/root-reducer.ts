import { combineReducers } from 'redux';
import { RootState } from '../types/index';

// Reducers
import { routerReducer as router } from 'react-router-redux';
// import { reducer as counters, State as CountersState } from '@src/redux/counters';
// import { reducer as todos, State as TodosState } from '@src/redux/todos';

// Actions
// import { RootAction } from '@src/redux';
// import { RootAction } from './root-action';

export const rootReducer = combineReducers<RootState>({router});
