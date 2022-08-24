import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AddButtonComponent } from './add-button/add-button.component';



@NgModule({
  declarations: [
    CardComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    AddButtonComponent
  ]
})
export class HomeComponentsModule { }
