import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PaintingsComponent } from './routes/paintings/paintings.component';
import { CeramicsComponent } from './routes/ceramics/ceramics.component';
import { ExhibitionsComponent } from './routes/exhibitions/exhibitions.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Lillian Lynn Art | Home' },
  // { path: 'about', component: AboutComponent, title: 'Lillian Lynn Art | About' },
  { path: 'paintings', component: PaintingsComponent, title: 'Lillian Lynn Art | Paintings' },
  { path: 'ceramics', component: CeramicsComponent, title: 'Lillian Lynn Art | Ceramics' },
  { path: 'exhibitions', component: ExhibitionsComponent, title: 'Lillian Lynn Art | Exhibitions' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
