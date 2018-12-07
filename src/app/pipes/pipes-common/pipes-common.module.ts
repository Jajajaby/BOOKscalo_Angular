import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandsPipe } from '../thousands.pipe';

@NgModule({
  imports: [
    CommonModule,
    ThousandsPipe
  ],
  declarations: []
})
export class PipesCommonModule { }
