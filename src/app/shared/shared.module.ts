import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { TextareaAutosizeDirective } from './directives/text-area-auto-resize.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    AddButtonComponent,
    ModalComponent,
    TextareaAutosizeDirective
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AddButtonComponent,
    ModalComponent,
    TextareaAutosizeDirective
  ],
})
export class SharedModule {}