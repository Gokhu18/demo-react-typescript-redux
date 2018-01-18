import {
  Dispatch as ReduxDispatch,
  Reducer as ReduxReducer,
} from 'redux';

import { RootAction } from './root-action';
import { RootState } from './types/index';

export type Dispatch = ReduxDispatch<RootAction>;
export type Reducer = ReduxReducer<RootState>;