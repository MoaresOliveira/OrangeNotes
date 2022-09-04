import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection, CollectionType } from '../../../interfaces/collection';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  collections: Collection[] = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collectionService.getCollections().subscribe((data: any) => {
      this.collections = data;
    }).add(() => {
      this.collections.forEach((collection)=> {
        this.collectionService.getCollectionContent(collection.id).subscribe((content) => {
          content.forEach(el => el.parent = collection);
          collection.content = content;
        })
      })
    })
  }

  open(item: HTMLElement){
    let collection = item.querySelector('.collection');
    collection?.classList.toggle('active')
    let topicList = item.querySelector('.topic-list');
    topicList?.toggleAttribute('hidden');
  }

}
