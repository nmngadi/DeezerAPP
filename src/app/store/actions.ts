import { createAction, props } from '@ngrx/store';
import { IArtist } from 'src/Interfaces/IArtist';
export const getListItems = createAction('[Shopping] GetListItems');

export const serachArtist = createAction(
  '[Search Page] SearchArtist',
  props<{ items: IArtist[] }>()
);
export const serachParameter = createAction(
  '[Search Parameter] SearchArtist',
  props<{ items: string }>()
);
