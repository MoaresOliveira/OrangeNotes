import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionComponent } from './collection.component';
import { CollectionRoutingModule } from './collection.routing.module';
import { CollectionComponentsModule } from './components/collection-components.module';

@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    CollectionComponentsModule
  ]
})
export class CollectionModule { }
