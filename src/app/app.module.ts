import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ROUTES
import { APP_ROUTES } from './app.routes';

// MODULES
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './register/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PageforbiddenComponent } from './pageforbidden/pageforbidden.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    PageforbiddenComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
