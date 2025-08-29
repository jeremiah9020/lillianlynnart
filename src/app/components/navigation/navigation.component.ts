import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [RouterLink, FaIconComponent, RouterLinkActive],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private elementRef: ElementRef) {}

  public closeIcon = faClose;

  @Output() close = new EventEmitter<void>();

  @HostListener('window:click', ['$event']) onClick(event: MouseEvent) {
    if (event.target && !this.elementRef.nativeElement.contains(event.target)) {
      this.close.emit();
    }
  }
}
