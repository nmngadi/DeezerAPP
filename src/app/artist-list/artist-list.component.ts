import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { IArtist } from "src/Interfaces/IArtist";
import { ArtistService } from "src/services/artist.service";
import { take } from "rxjs/operators";
@Component({
  selector: "app-artist-list",
  templateUrl: "./artist-list.component.html",
  styleUrls: ["./artist-list.component.css"]
})
export class ArtistListComponent {
  imageWidth: number = 50;
  ImageMargin: number = 2;
  errorMessage = "";
  artists: IArtist[] = [];

  searchstring: string;

  constructor(private artistService: ArtistService) {}

  searchArtist() {
    this.artistService
      .getArtistList(this.searchstring)
      .pipe(take(0))
      .subscribe({
        next: artists => {
          this.artists = artists;
        },
        error: err => (this.errorMessage = err)
      });
  }

  /*   ngOnChanges(changes: SimpleChanges) {
    if (typeof changes["searchstring"] !== "undefined") {
      // retrieve the quiz variable change info
      var change = changes["searchstring"];

      // only perform the task if the value has been changed
      if (!change.isFirstChange()) {
        // execute the Http request and retrieve the result
        this.searchArtist();
      }
    } */
}
