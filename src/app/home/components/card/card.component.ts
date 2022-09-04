import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../../../interfaces/collection';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() collection!: Collection;
  percentAlign: string = ''

  constructor() {

  }

  ngOnInit(): void {
    let percent = this.collection.percentage!;
    this.percentAlign = percent > 7? `right: 0.5rem` : `right: -1.5rem`;
  }

}
