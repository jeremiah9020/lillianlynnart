import {
  Component,
  computed,
  HostListener,
  Input,
  signal,
  WritableSignal,
  effect,
  ChangeDetectorRef,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { PreviewComponent } from "../preview/preview.component";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
  imports: [PreviewComponent],
})
export class GalleryComponent {
  constructor(private cdr: ChangeDetectorRef) {
    effect(() => {
      this.loadImages();
    });
  }

  public selectedIndex = -1;

  @Input({ required: true }) images!: string[];

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
  }

  private screenWidth: WritableSignal<number> = signal(window.innerWidth);

  private numberOfColumns = computed(() => {
    if (this.screenWidth() > 800) return 3;
    if (this.screenWidth() > 500) return 2;
    return 1;
  });

  public columns: [string, number][][] = [];

  private async loadImages() {
    const numberOfColumns = this.numberOfColumns();
    const columns = this.columns = new Array(numberOfColumns).fill(null).map(() => []) as [string, number][][];
    const columnHeights = new Array(numberOfColumns).fill(0);

    for (let i = 0; i < this.images.length; i++) {
      const img = new Image();
      const height = await new Promise<number>((res) => {
        img.onload = () => {
          setTimeout(() => res(img.naturalHeight), 20);
        };
        img.src = this.images[i];
      });

      const index = this.getMinimumIndex(columnHeights);
      columnHeights[index] += height;

      columns[index].push([this.images[i], i]);
      this.cdr.detectChanges();

    }
  }

  private getMinimumIndex(array: number[]) {
    let index = 0, minimum = array[index];

    for (let i = 1; i < array.length; i++) {
      const value = array[i];
      if (value < minimum) {
        index = i;
        minimum = value;
      }
    }

    return index;
  }
}
