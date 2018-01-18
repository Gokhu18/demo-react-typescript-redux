// This file contains types we may want to use throughout the project
interface StoreEnhancerState { }
export interface RootState extends StoreEnhancerState {
  router?: object;
  enthusiasm: EnthusiasmState;
}

export interface EnthusiasmState {
  name: string;
  enthusiasmLevel: number;
}
export const ENTHUSIASM_STATE_INITIAL_STATE = {
  name: '', 
  enthusiasmLevel: 1
};
