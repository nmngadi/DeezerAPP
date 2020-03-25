import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ArtistService } from 'src/services/artist.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  imageWidth = 50;
  ImageMargin = 2;
  errorMessage = '';
  artists: IArtist[] = [];

  searchstring: string;

  constructor(private artistService: ArtistService) {}

  searchArtist() {
    this.artistService.getArtistList(this.searchstring).subscribe({
      next: artists => {
        this.artists = artists;
      },
      error: err => (this.errorMessage = err)
    });
  }
}
