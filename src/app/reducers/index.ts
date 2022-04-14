import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { counterReduser, CounterState, COUNTER_KEY } from './counter';

export interface State {
  [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReduser,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
