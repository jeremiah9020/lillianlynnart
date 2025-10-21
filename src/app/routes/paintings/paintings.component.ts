import { Component, computed, signal } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-paintings',
  imports: [GalleryComponent],
  templateUrl: './paintings.component.html',
  styleUrl: './paintings.component.scss',
})
export class PaintingsComponent {
  private files = signal([
    'Dutch',
    'woods',
    'whitepumpkin',
    'orangepumpkin',
    'cannonbeach',
    'couple',
    'couple2',
    'cypus',
    'cyspusnight',
    'finnriver',
    'fivemilelake',
    'flowers',
    'foulweather',
    'france',
    'gigharbor',
    'granny',
    'granny2',
    'house',
    'house2',
    'isabel',
    'jeremiah',
    'knees',
    'lilly',
    'man',
    'man3',
    'nightlights',
    'ollie',
    'pointnopoint',
    'portgamble',
    'portgamble2',
    'pullman',
    'pullman1',
    'pullman2',
    'rose',
    'rowers',
    'sanjuan',
    'sheeplake',
    'summer',
    'tacoma',
    'threesome',
  ]);

  public images = computed(() => this.files().map((x) => `paintings/${x}.jpg`));
}
