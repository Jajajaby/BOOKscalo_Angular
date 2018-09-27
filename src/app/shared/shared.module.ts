import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
   imports: [
      RouterModule,
      CommonModule,
   ],
   declarations: [
      HeaderComponent,
      SidebarComponent
      // NopagefoundComponent
   ],
   exports: [
      HeaderComponent,
      SidebarComponent
      // NopagefoundComponent
   ]
})
export class SharedModule { }