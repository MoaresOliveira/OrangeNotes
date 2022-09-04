import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SideListComponent } from './side-list/side-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { ContentComponent } from './content/content.component';
import { AddTextComponent } from './add-text/add-text.component';
import { OptionsContentComponent } from './options-content/options-content.component';
import { AddContentComponent } from './add-content/add-content.component';



@NgModule({
  declarations: [
    SideListComponent,
    BoardComponent,
    ContentComponent,
    AddTextComponent,
    OptionsContentComponent,
    AddContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SideListComponent,
    BoardComponent,
    OptionsContentComponent,
    AddContentComponent
  ]
})
export class CollectionComponentsModule { }
