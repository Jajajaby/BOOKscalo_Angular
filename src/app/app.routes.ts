import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { AddBookComponent  } from './pages/add-book/add-book.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { LibraryComponent } from './pages/library/library.component';
import { OneBookComponent } from './pages/one-book/one-book.component';

const APP_ROUTES: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'addBook', component: AddBookComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'messages', component: MessagesComponent },
   { path: 'library', component: LibraryComponent },
   { path: 'book', component: OneBookComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);