import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagesComponent } from './messages/messages.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
    imports: [
      RouterModule,
      CommonModule,
    ],
    declarations: [
      HeaderComponent,
      SidebarComponent,
      MessagesComponent,
      LoadingComponent,
      NotificationsComponent
    ],
    exports: [
      HeaderComponent,
      SidebarComponent,
      MessagesComponent,
      LoadingComponent
    ]
})
export class SharedModule { }