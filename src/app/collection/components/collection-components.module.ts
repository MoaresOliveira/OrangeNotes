import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from './side-list/side-list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    SideListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SideListComponent
  ]
})
export class CollectionComponentsModule { }
