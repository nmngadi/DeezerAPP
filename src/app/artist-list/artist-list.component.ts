import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ArtistService } from 'src/services/artist.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ArtistState, selectListItems } from '../store/reducer';
import { getListItems, serachArtist, serachParameter } from '../store/actions';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  errorMessage = '';
  artists: IArtist[] = [];
  loading: boolean;
  ArtistListItems$: Observable<IArtist[]>;
  searchString: string;

  constructor(
    private artistService: ArtistService,
    private ArtistListStore: Store<ArtistState>
  ) {}
  ngOnInit(): void {
    this.ArtistListStore.dispatch(getListItems());
    this.ArtistListItems$ = this.ArtistListStore.pipe(select(selectListItems));
  }

  onKey(event: any) {
    this.loading = true;
  }
  searchArtist() {
    this.artistService.getArtistList(this.searchString).subscribe({
      next: artists => {
        this.artists = artists;
        this.ArtistListStore.dispatch(serachArtist({ items: this.artists }));
        this.ArtistListStore.dispatch(serachParameter({ items: this.searchString }));
      },
      error: err => (this.errorMessage = err)
    });
  }
}
