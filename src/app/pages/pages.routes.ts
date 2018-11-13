import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { PagesComponent  } from './pages.component';
import { AddBookComponent  } from './add-book/add-book.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { SearchComponent } from './search/search.component';

// GUARD
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { ChatsComponent } from './chats/chats.component';

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
					{ path: 'search/:input', component: SearchComponent },
					{ path: 'messages', component: ChatsComponent },
					{ path: '', pathMatch: 'full', redirectTo: 'home' }
		] 
   }
];

export const PAGES_ROUTES = RouterModule.forChild(PAGES_ROUTE);