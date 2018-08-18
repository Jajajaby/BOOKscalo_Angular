import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//RUTAS
import { APP_ROUTING } from './app.routes';


//SERVICIOS


//COMPONENTES
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardBookComponent } from './components/card-book/card-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    SidebarComponent,
    AddBookComponent,
    ProfileComponent,
    CardBookComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
