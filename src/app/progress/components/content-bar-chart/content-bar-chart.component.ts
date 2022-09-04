import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../../interfaces/collection';

@Component({
  selector: 'app-content-bar-chart',
  templateUrl: './content-bar-chart.component.html',
  styleUrls: ['./content-bar-chart.component.scss']
})
export class ContentBarChartComponent implements OnInit {

  @Input() collections: Collection[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
