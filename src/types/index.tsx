// This file contains types we may want to use throughout the project
interface StoreEnhancerState { }
export interface RootState extends StoreEnhancerState {
  router?: object;
  name?: string;
}

// export interface StoreState {
//   router?: Object;
//   name: string;
// }
