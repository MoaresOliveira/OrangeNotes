import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Collection } from '../../../interfaces/collection';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnChanges {

  @Input() collection!: Collection;
  nothing: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.collection === undefined) {
      this.nothing = true;
    }else {
      this.nothing = false;
    }
  }

}
