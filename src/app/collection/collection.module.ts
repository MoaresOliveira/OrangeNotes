import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionComponent } from './collection.component';
import { CollectionRoutingModule } from './collection.routing.module';
import { CollectionComponentsModule } from './components/collection-components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CollectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CollectionRoutingModule,
    CollectionComponentsModule
  ]
})
export class CollectionModule { }
