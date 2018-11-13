import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES
import { SharedModule } from '../shared/shared.module';

// PIPES
import { ThousandsPipe } from '../pipes/thousands.pipe';

// SERVICES
import { DatabaseService } from "./../services/database.service";
import { DateService } from "./../services/date.service";

// ROUTES
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
import { ChatsComponent } from './chats/chats.component';
import { SearchComponent } from './search/search.component';

// COMPONENTS
import { CardBookComponent } from '../components/card-book/card-book.component';
import { OneBookComponent } from '../components/one-book/one-book.component';

@NgModule({
  declarations: [
    AddBookComponent,
    ProfileComponent,
    HomeComponent,
    LibraryComponent,
    OneBookComponent,
    PagesComponent,
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