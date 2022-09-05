import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Collection } from '../interfaces/collection';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  collections: Collection[] = []
  collectionsForPercentage: Collection[] = []
  collectionsForContent: Collection[] = []

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe(collections => {
      this.collections = collections;

      this.collections.forEach(collection => {
        this.collectionService.getCollectionContent(collection.id).subscribe(content => {
          collection.content = content
        }).add(() => {
          this.collectionsForContent = this.collections.sort((a, b) => {
            return b.content!.length - a.content!.length
          }).slice(0, 5)
          this.collectionsForPercentage = this.collections.sort((a, b) => {
            return b.percentage! - a.percentage!
          }).slice(0, 5)
        })
      })
    })
  }


}
