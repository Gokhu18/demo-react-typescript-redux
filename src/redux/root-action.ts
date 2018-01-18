// React router actions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
type ReactRouterAction = RouterAction | LocationChangeAction;

// import { IncrementEnthusiasm, DecrementEnthusiasm, EnthusiasmAction } from '../actions/index'
import { EnthusiasmAction } from '../actions/index';

// import { actions as countersAC } from '@src/redux/counters';
// import { actions as todosAC } from '@src/redux/todos';
// import { actions as toastsAC } from '@src/redux/toasts';

// export const allActions = {
  // ...countersAC,
  // ...todosAC,
  // ...toastsAC,
// };

export type RootAction = ReactRouterAction | EnthusiasmAction;
