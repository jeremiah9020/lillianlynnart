import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Lillian Lynn Art | Home' },
  { path: 'about', component: AboutComponent, title: 'Lillian Lynn Art | About' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
