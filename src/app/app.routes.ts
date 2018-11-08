import {  RouterModule, Routes } from '@angular/router';

// Componentes
import { LoginComponent } from './register/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '**', component: PagenotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});