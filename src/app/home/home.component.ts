import { Component, OnInit } from '@angular/core';
import { Collection } from '../interfaces/collection';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections: Collection[] = []

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    this.collectionService.getCollections()
      .subscribe(data => {
        this.collections = data;
      })
  }

}
