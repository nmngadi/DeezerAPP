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
// import { ConvertToYearPipe } from './convert-to-year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistDetailsComponent,
    ConvertToDurationPipe,
    ShortNumberPipe,
    WelcomeComponent
    //  ConvertToYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'artist', component: ArtistListComponent },
      {
        path: 'artist/:id',
        //   canActivate: [ArtistDetailsGuard],
        component: ArtistDetailsComponent
      },

      //   { path: 'welcome', component: WelcomeComponent },
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
