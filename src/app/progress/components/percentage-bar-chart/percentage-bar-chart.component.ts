import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../../interfaces/collection';

@Component({
  selector: 'app-percentage-bar-chart',
  templateUrl: './percentage-bar-chart.component.html',
  styleUrls: ['./percentage-bar-chart.component.scss']
})
export class PercentageBarChartComponent implements OnInit {

  @Input() collections: Collection[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
