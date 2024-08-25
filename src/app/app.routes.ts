import { Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

export const routes: Routes = [
  { path: 'pageone', component: PageoneComponent },
  { path: 'pagetwo', component: PagetwoComponent },
  { path: '', redirectTo: '/pageone', pathMatch: 'full' }, // Redirect to 'pageone' by default
  { path: '**', redirectTo: '/pageone' } // Redirect any unknown paths to 'pageone'
];
