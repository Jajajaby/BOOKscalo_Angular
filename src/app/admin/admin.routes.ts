import {  RouterModule, Routes } from '@angular/router';

// PAGES
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// GUARD
// import { LoginGuardGuard } from '../services/guards/login-guard.guard';
// guard de admin

const ADMIN_ROUTE: Routes = [
	{
		path: 'admin',
    component: AdminComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
      ]
   }
];

export const ADMIN_ROUTES = RouterModule.forChild(ADMIN_ROUTE);