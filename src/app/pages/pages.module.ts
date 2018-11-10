import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULOS
import { SharedModule } from '../shared/shared.module';

// PIPES
import { ThousandsPipe } from '../pipes/thousands.pipe';

//SERVICIOS
import { DatabaseService } from "./../services/database.service";
import { DateService } from "./../services/date.service";

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

// ANGULARFIRE2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// ENVIRONMENT
import { environment } from '../../environments/environment';

// PAGES-COMPONENTS
import { PagesComponent } from './pages.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { OneBookComponent } from './one-book/one-book.component';


// COMPONENTS
import { BooksComponent } from '../components/books/books.component';
import { CardBookComponent } from '../components/card-book/card-book.component';
import { SearchComponent } from './search/search.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    AddBookComponent,
    ProfileComponent,
    HomeComponent,
    LibraryComponent,
    OneBookComponent,
    PagesComponent,
    BooksComponent,
    CardBookComponent,
    SearchComponent,
    ThousandsPipe,
    ChatsComponent
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
    DatabaseService,
    DateService
  ],
  exports:[
    ThousandsPipe
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }