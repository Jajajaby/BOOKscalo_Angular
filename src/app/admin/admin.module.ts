import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTES
import { ADMIN_ROUTES } from './admin.routes';

// MODULES
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { GlobalMessageComponent } from './global-message/global-message.component';
import { RouterModule } from '@angular/router';
import { PipesCommonModule } from '../pipes/pipes-common/pipes-common.module';

@NgModule({
  imports: [
    CommonModule,
    PipesCommonModule,
    SharedModule,
    ADMIN_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    GlobalMessageComponent
  ],
  exports: [
    PipesCommonModule,
  ]
})
export class AdminModule { }
