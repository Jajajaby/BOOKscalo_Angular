import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ADMIN_ROUTES } from './admin.routes';
// Modulos
import { SharedModule } from '../shared/shared.module';

// Componentes
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { GlobalMessageComponent } from './global-message/global-message.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ADMIN_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    GlobalMessageComponent
  ]
})
export class AdminModule { }
