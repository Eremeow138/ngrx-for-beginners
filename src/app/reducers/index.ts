import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReduser, CounterState } from './counter';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReduser,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
