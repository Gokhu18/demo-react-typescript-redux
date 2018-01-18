import { EnthusiasmAction } from '../actions';
import { EnthusiasmState, ENTHUSIASM_STATE_INITIAL_STATE } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState: EnthusiasmState = ENTHUSIASM_STATE_INITIAL_STATE;

export const enthusiasm = (state = initialState, action: EnthusiasmAction): EnthusiasmState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      const newValueAfterIncrement = state.enthusiasmLevel + 1;
      return { ...state, enthusiasmLevel: newValueAfterIncrement };
    case DECREMENT_ENTHUSIASM:
      const newValueAfterDecrement = Math.max(1, state.enthusiasmLevel - 1);
      return { ...state, enthusiasmLevel: newValueAfterDecrement };
    default:
      return state;
  }
};
