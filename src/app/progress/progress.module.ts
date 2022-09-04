import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProgressComponentsModule } from './components/progress-components.module';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProgressRoutingModule,
    ProgressComponentsModule
  ]
})
export class ProgressModule { }
