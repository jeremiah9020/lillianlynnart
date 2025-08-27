import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FaIconComponent],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  instagramIcon = faInstagram
  emailIcon = faEnvelope

  public email = 'lillian.berdean@gmail.com'
  public instagram = 'lillianlynn.art'
}
