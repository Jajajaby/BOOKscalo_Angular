import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandsPipe } from '../thousands.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ThousandsPipe
  ],
  exports: [
    ThousandsPipe
  ]
})
export class PipesCommonModule { }
