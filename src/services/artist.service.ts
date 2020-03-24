import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IArtist } from "src/Interfaces/IArtist";
import { Observable, throwError, timer } from "rxjs";
import {
  catchError,
  tap,
  map,
  distinctUntilChanged,
  retry
} from "rxjs/operators";
import { IAlbum } from "src/Interfaces/iAlbum";
import { ITrack } from "src/Interfaces/iTrack";

@Injectable({
  providedIn: "root"
})
export class ArtistService {
  private ArtistListUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private trackUrl: string;
  constructor(private http: HttpClient) {}

  getArtistList(str: string): Observable<IArtist[]> {
    this.ArtistListUrl =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=" +
      str +
      "&offset=0&limit=10&type=${artist}";
    return this.http.get(this.ArtistListUrl).pipe(
      map((res: any) => <IArtist[]>res.data),
      distinctUntilChanged(),
      retry(3),
      tap(data => console.log("All :" + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getArtist(id: number): Observable<IArtist> {
    this.artistUrl =
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/` + id;
    return this.http.get(this.artistUrl).pipe(
      map(res => <IArtist>res),
      catchError(this.handleError)
    );
  }
  getTopTracks(id: number): Observable<ITrack[]> {
    this.trackUrl =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +
      id +
      "/top?limit=5";
    return this.http.get(this.trackUrl).pipe(
      map((res: any) => <ITrack[]>res.data),
      catchError(this.handleError)
    );
  }

  getAlbums(artistId: Number): Observable<IAlbum[]> {
    this.albumsUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistId}/albums`;
    return this.http.get(this.albumsUrl).pipe(
      map((res: any) => <IAlbum[]>res.data),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
