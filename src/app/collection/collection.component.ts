import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  boardActive: boolean = true;
  class: string = 'collection board'

  constructor() { }

  ngOnInit(): void {
  }

  toggleList(){
    if(this.boardActive){
      this.boardActive = false;
      this.class = 'collection list'
    }else {
      this.boardActive = true;
      this.class = 'collection board'
    }
    console.log(this.class)
  }

}
