import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/Interfaces/IArtist';
import { ArtistService } from 'src/services/artist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAlbum } from 'src/Interfaces/iAlbum';
import { forkJoin } from 'rxjs';
import { ITrack } from 'src/Interfaces/iTrack';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artist: IArtist;
  albums: IAlbum[] = [];
  tracks: ITrack[] = [];
  loading: boolean;
  errorMessage: string;
  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.GetArtistDetails(id);
      this.loading = true;
    }
  }
  GetArtistDetails(id: number) {
    forkJoin([
      this.artistService.getArtist(id),
      this.artistService.getAlbums(id),
      this.artistService.getTopTracks(id)
    ])
      .pipe(debounceTime(5000))
      .subscribe({
        next: Results => {
          (this.artist = Results[0]),
            (this.albums = Results[1]),
            (this.tracks = Results[2]),
            (this.loading = false);
        },
        error: err => (this.errorMessage = err)
      });
  }
  onBack(): void {
    this.router.navigate(['/artist']);
  }
}
