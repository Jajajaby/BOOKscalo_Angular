import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { AddBookComponent  } from './pages/add-book/add-book.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';


const APP_ROUTES: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'addBook', component: AddBookComponent },
   { path: 'profile', component: ProfileComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'addBook' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);