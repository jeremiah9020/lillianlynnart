import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  imports: [RouterLink, FaIconComponent, NavigationComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideRight', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  public hamburgerIcon = faBars;
  public showNavigation = false;

  @HostListener('window:click', []) protected onWindowClick() {
    this.showNavigation = false;
  }

  public onHamburgerClick(event: MouseEvent) {
    this.showNavigation = true;
    event.stopPropagation();
  }
}
