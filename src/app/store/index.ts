import { ActionReducerMap } from '@ngrx/store';
import { reducer, ArtistState } from './reducer';

export interface ArtistListState {
  ArtistList: ArtistState;
}

export const reducers: ActionReducerMap<ArtistListState> = {
  ArtistList: reducer
};
