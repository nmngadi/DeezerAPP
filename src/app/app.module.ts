import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { FormsModule } from '@angular/forms';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ConvertToDurationPipe } from './convert-to-duration.pipe';
import { ShortNumberPipe } from './short-number.pipe';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsGuard } from './artist-details/artist-details.guard';
import { ConvertToYearPipe } from './convert-to-year.pipe';
import { EffectsModule } from '@ngrx/effects';
import { ArtistEffects } from './store/effects';
import { StoreModule, ActionReducer, Store } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ArtistListReducer } from './store/reducer';
// console.log all actions

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailsComponent,
    ConvertToDurationPipe,
    ShortNumberPipe,
    WelcomeComponent,
    ConvertToYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
      //  logOnly: environment.production
    }),

    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ArtistEffects]),
    RouterModule.forRoot([
      { path: 'artist', component: ArtistListComponent },
      {
        path: 'artist/:id',
        canActivate: [ArtistDetailsGuard],
        component: ArtistDetailsComponent
      },

      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
