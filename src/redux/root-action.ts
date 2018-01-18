// React router actions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
type ReactRouterAction = RouterAction | LocationChangeAction;

// Actions
import { EnthusiasmAction } from '../actions/index';

export type RootAction = ReactRouterAction | EnthusiasmAction;
