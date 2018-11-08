import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    imports: [
      RouterModule,
      CommonModule,
    ],
    declarations: [
      HeaderComponent,
      SidebarComponent,
      MessagesComponent,
    ],
    exports: [
      HeaderComponent,
      SidebarComponent,
      MessagesComponent,
    ]
})
export class SharedModule { }