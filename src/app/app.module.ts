import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// no los estamos usando por el momento (no se si se usen)
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { BooksService } from "./services/books.service";

//PIPES
import { KeysPipe } from './pipes/keys.pipe'; // hay que borrarlo ya no sirve era para le http

//COMPONENTES
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { LibraryComponent } from './pages/library/library.component';
import { OtherUserComponent } from './pages/other-user/other-user.component';
import { OneBookComponent } from './pages/one-book/one-book.component';


// Angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Enviroment
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    SidebarComponent,
    AddBookComponent,
    ProfileComponent,
    CardBookComponent,
    HomeComponent,
    MessagesComponent,
    LibraryComponent,
    OtherUserComponent,
    OneBookComponent,
    KeysPipe // se debe sacar
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, // se debe sacar
    HttpClientModule, // se debe sacar
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
