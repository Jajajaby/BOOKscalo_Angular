import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { PagesComponent  } from './pages.component';
import { AddBookComponent  } from './add-book/add-book.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { OneBookComponent } from './one-book/one-book.component';
import { SearchComponent } from './search/search.component';

// GUARD
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const PAGES_ROUTE: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [ LoginGuardGuard ],
      	children: [
	      	{ path: 'home', component: HomeComponent },
					{ path: 'addBook', component: AddBookComponent },
					{ path: 'profile', component: ProfileComponent },
					{ path: 'library', component: LibraryComponent },
					{ path: 'book', component: OneBookComponent },
					{ path: 'search/:input', component: SearchComponent },
					{ path: '', pathMatch: 'full', redirectTo: 'home' }
		] 
   }
];

export const PAGES_ROUTES = RouterModule.forChild(PAGES_ROUTE);