import {  RouterModule, Routes } from '@angular/router';


import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


const APP_ROUTES: Routes = [
   { path: 'books', component: BooksComponent },
   { path: 'header', component: HeaderComponent },
   { path: 'sidebar', component: SidebarComponent },
   { path: '**', pathMatch: 'full', redirectTo: 'books' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);