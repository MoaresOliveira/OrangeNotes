import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AddButtonComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    HeaderComponent,
    AddButtonComponent
  ],
})
export class SharedModule {}