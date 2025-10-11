import { Component, computed, signal } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-exhibitions',
  imports: [GalleryComponent],
  templateUrl: './exhibitions.component.html',
  styleUrl: './exhibitions.component.scss',
})
export class ExhibitionsComponent {
  private files = signal(['ex1', 'ex2', 'ex3', 'ex4', 'ex5', 'ex6']);

  public images = computed(() => this.files().map((x) => `exhibitions/${x}.jpg`));
}
