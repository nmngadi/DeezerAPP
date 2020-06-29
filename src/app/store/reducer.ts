import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';
import { IArtist } from 'src/Interfaces/IArtist';
import { serachArtist, serachParameter } from './actions';

export interface ArtistState {
  isLoading: boolean;
  ArtistListItems: IArtist[];
  SearchParameter: [];
}

export const initialState: ArtistState = {
  isLoading: false,
  ArtistListItems: [],
  SearchParameter: []
};

export const ArtistListReducer = createReducer(
  initialState,
  on(serachArtist, state => ({ ...state, isLoading: true })),
  on(serachParameter, state => ({ ...state, isLoading: true }))
);

// Export the reducers to the module for use in app.module.ts
export function reducer(state: ArtistState | undefined, action: Action) {
  return ArtistListReducer(state, action);
}

// Selectors
// Provide the view into the pieces of the state required for the view

export const selectFeature = createFeatureSelector<any, ArtistState>(
  'artistList'
);

export const selectIsLoading = createSelector(
  selectFeature,
  (state: ArtistState) => state.isLoading
);

export const selectListItems = createSelector(
  selectFeature,
  (state: ArtistState) => state.ArtistListItems
);
