import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { BooksService } from "./services/books.service";

//COMPONENTES
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    SidebarComponent,
    AddBookComponent,
    ProfileComponent,
    CardBookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
