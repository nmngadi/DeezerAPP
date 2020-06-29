import { Component } from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ArtistService } from 'src/services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  errorMessage = '';
  artists: IArtist[] = [];

  searchString: string;

  constructor(private artistService: ArtistService) {}

  searchArtist() {
    this.artistService.getArtistList(this.searchString).subscribe({
      next: artists => {
        this.artists = artists;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
