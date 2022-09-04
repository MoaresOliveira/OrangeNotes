import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBarChartComponent } from './content-bar-chart/content-bar-chart.component';
import { PercentageBarChartComponent } from './percentage-bar-chart/percentage-bar-chart.component';

@NgModule({
  declarations: [
    ContentBarChartComponent,
    PercentageBarChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentBarChartComponent,
    PercentageBarChartComponent
  ]
})
export class ProgressComponentsModule { }
