import { NgTemplateOutlet } from '@angular/common'

export interface IArtist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: Number;
  radio: boolean;
  tracklist: string;
}

