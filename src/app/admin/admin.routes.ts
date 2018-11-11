import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard } from '../services/guards/admin.guard';
import { UsersComponent } from './users/users.component';

// GUARD
// import { LoginGuardGuard } from '../services/guards/login-guard.guard';
// guard de admin

const ADMIN_ROUTE: Routes = [
	{
		path: 'admin',
    component: AdminComponent,
    canActivate: [ LoginGuardGuard, AdminGuard ],
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'users', component: UsersComponent },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
      ]
   }
];

export const ADMIN_ROUTES = RouterModule.forChild(ADMIN_ROUTE);