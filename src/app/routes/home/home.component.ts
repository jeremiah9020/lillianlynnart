import { Component } from '@angular/core';
import { GalleryComponent } from "../../components/gallery/gallery.component";

@Component({
  selector: 'app-home',
  imports: [GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public images: string[] = [
    'https://placehold.co/600x800/292929/fafafa?text=Image+1',
    'https://placehold.co/600x600/292929/fafafa?text=Image+2',
    'https://placehold.co/600x700/292929/fafafa?text=Image+3',
    'https://placehold.co/600x500/292929/fafafa?text=Image+4',
    'https://placehold.co/600x900/292929/fafafa?text=Image+5',
    'https://placehold.co/600x750/292929/fafafa?text=Image+6',
    'https://placehold.co/600x750/292929/fafafa?text=Image+7',
    'https://placehold.co/600x750/292929/fafafa?text=Image+8',
    'https://placehold.co/600x750/292929/fafafa?text=Image+9',
    'https://placehold.co/600x750/292929/fafafa?text=Image+10',
    'https://placehold.co/600x750/292929/fafafa?text=Image+11',
    'https://placehold.co/600x750/292929/fafafa?text=Image+12',
    'https://placehold.co/600x750/292929/fafafa?text=Image+13',
    'https://placehold.co/600x750/292929/fafafa?text=Image+14',
    'https://placehold.co/600x750/292929/fafafa?text=Image+15',
    'https://placehold.co/600x750/292929/fafafa?text=Image+16',
    'https://placehold.co/600x750/292929/fafafa?text=Image+17',
    'https://placehold.co/600x750/292929/fafafa?text=Image+18',
    'https://placehold.co/600x750/292929/fafafa?text=Image+19',
    'https://placehold.co/600x750/292929/fafafa?text=Image+20',

  ]
}
