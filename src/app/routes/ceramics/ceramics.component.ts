import { Component, computed, signal } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-ceramics',
  imports: [GalleryComponent],
  templateUrl: './ceramics.component.html',
  styleUrl: './ceramics.component.scss',
})
export class CeramicsComponent {
  private files = signal([
    '2heads',
    '2heads2',
    '2heads3',
    '2heads4',
    '2heads5',
    '3heads',
    '3heads2',
    '3heads3',
    'head1',
    'head2',
    'head3',
    'head4',
    'head5',
    'head6',
    'head7',
    'head8',
    'head9',
    'head10',
    'head11',
    'head12',
    'lady',
    'man',
  ]);

  public images = computed(() => this.files().map((x) => `ceramics/${x}.jpg`));
}
