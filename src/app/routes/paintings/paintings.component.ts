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
    'foulweather',
    'whitepumpkin',
    'ollie',
    'orangepumpkin',
    'cannonbeach',
    'cyspusnight',
    'nightlights',
    'pointnopoint',
    'finnriver',
    'flowers',
    'rowers',
    'jeremiah',
    'portgamble2',
    'gigharbor',
    'pullman2',
    'fivemilelake',
    'cypus',
    'sheeplake',
    'france',
    'house',
    'house2',
    'granny',
    'granny2',
    'knees',
    'man',
    'couple2',
    'portgamble',
    'pullman',
    'pullman1',
    'couple',
    'man3',
    'rose',
    'sanjuan',
    'summer',
    'tacoma',
    'threesome',
    'lilly',
    'isabel',
  ]);

  public images = computed(() => this.files().map((x) => `paintings/${x}.jpg`));
}
