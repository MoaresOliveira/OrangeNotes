import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { CollectionComponent } from './collection.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent
  },
  {
    path: ':id',
    component: CollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
