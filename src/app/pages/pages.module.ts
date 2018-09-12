import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULOS
import { SharedModule } from '../shared/shared.module';
// import { PipesModule } from '../pipes/pipes.module';

//SERVICIOS
import { BooksService } from "./../services/books.service";

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// PAGES-COMPONENTS
import { PagesComponent } from './pages.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { LibraryComponent } from './library/library.component';
import { OtherUserComponent } from './other-user/other-user.component';
import { OneBookComponent } from './one-book/one-book.component';

// ANGULARFIRE2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// ENVIRONMENT
import { environment } from '../../environments/environment';
// import { RegisterComponent } from './register/register.component';

// COMPONENTS
import { BooksComponent } from '../components/books/books.component';
import { CardBookComponent } from '../components/card-book/card-book.component';


@NgModule({
  declarations: [
    AddBookComponent,
    ProfileComponent,
    HomeComponent,
    MessagesComponent,
    LibraryComponent,
    OtherUserComponent,
    OneBookComponent,
    PagesComponent,
    BooksComponent,
    CardBookComponent
  ],
  imports: [
    BrowserModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }