import {
  Component,
  effect,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowCircleLeft, faArrowCircleRight, faCaretLeft, faCaretRight, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
  imports: [FaIconComponent],
})
export class PreviewComponent {
  constructor(private elementRef: ElementRef) {
    effect(() => {
      this.isHidden = this._index() === -1;
    });
  }

  public leftArrow = faCaretLeft
  public rightArrow = faCaretRight
  public closeIcon = faClose

  @ViewChild('container', {static: true}) containerRef!: ElementRef;

  @Input({ required: true }) images!: string[];

  public _index = signal(-1);
  @Input({ required: true }) set index(val: number) {
    this._index.set(val);
  }

  @Output() indexChange = new EventEmitter<number>();

  @HostBinding('class.is-hidden') isHidden = false;

@HostListener('window:keydown', ['$event']) windowKeydown(event: KeyboardEvent) {
    if (this._index() === -1) return;
    if (event.key === 'Escape') this.indexChange.emit(-1);
  }

  @HostListener('window:click', ['$event']) windowClick(event: MouseEvent) {
    if (this._index() === -1) return;
    if (event.target && this.containerRef.nativeElement.contains(event.target)) return;
    this.indexChange.emit(-1);
  }

  public cycleIndex(addend: number) {
    const current = this._index() + addend + this.images.length;
    this.indexChange.emit(current % this.images.length);
  }
}
