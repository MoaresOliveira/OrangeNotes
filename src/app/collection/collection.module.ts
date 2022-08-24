import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionComponent } from './collection.component';
import { CollectionRoutingModule } from './collection.routing.module';

@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule
  ]
})
export class CollectionModule { }
