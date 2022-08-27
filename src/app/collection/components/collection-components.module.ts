import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from './side-list/side-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    SideListComponent,
    BoardComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SideListComponent,
    BoardComponent
  ]
})
export class CollectionComponentsModule { }
