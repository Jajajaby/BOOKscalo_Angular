import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { GlobalMessageComponent } from './global-message/global-message.component';

// GUARD
import { AdminGuard } from '../services/guards/admin.guard';
import { LoginGuardGuard } from '../services/guards/login-guard.guard';

const ADMIN_ROUTE: Routes = [
	{
		path: 'admin',
    component: AdminComponent,
    canActivate: [ LoginGuardGuard, AdminGuard ],
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'users', component: UsersComponent },
        { path: 'global-message', component: GlobalMessageComponent },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
      ]
   }
];

export const ADMIN_ROUTES = RouterModule.forChild(ADMIN_ROUTE);