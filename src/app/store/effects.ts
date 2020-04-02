import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { catchError, map, mergeMap, exhaustMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ArtistService } from 'src/services/artist.service';
import { serachArtist } from './actions';
import { props } from '@ngrx/store';

@Injectable()
export class ArtistEffects {
  getListItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shopping] GetListItems'),
      mergeMap(() =>
        this.ArtistListService.getArtistList('lil wanye').pipe(
          map(movies => ({
            type: '[Search Page] SearchArtist',
            payload: movies
          }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ArtistListService: ArtistService
  ) {}
}
