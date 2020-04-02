import { createAction, props } from '@ngrx/store';
import { IArtist } from 'src/Interfaces/IArtist';
export const getListItems = createAction('[Shopping] GetListItems');

export const serachArtist = createAction(
  '[Search Page] SearchArtist',
  props<{ items: IArtist[] }>()
);
