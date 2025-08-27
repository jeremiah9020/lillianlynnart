import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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
  public closeIcon = faClose;

  @Output() close = new EventEmitter<void>();

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
