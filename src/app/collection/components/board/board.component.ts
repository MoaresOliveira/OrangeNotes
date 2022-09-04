import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Collection, CollectionType } from '../../../interfaces/collection';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {

  @Input() collection!: Collection;
  nothing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("board init", this.collection)
    if (this.collection === undefined) {
      this.nothing = true;
    }else {
      this.nothing = false;
    }
  }

}
