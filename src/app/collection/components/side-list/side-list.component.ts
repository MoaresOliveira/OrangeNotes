import { Component, OnInit } from '@angular/core';
import { Collection, CollectionType } from '../../../interfaces/collection';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  collections: Collection[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
      type: CollectionType.COLLECTION,
      content: [
        {
          id: 1,
          name: 'Angular',
          description: 'Angular is a platform that makes it easy to build applications with the web.',
          type: CollectionType.COLLECTION,
        },
        {
          id: 1,
          name: 'Angular',
          description: 'Angular is a platform that makes it easy to build applications with the web.',
          type: CollectionType.COLLECTION,
        }
      ]
    },
    {
      id: 2,
      name: 'React',
      description: 'A JavaScript library for building user interfaces',
      type: CollectionType.COLLECTION,
      content: [
        {
          id: 1,
          name: 'Angular',
          description: 'Angular is a platform that makes it easy to build applications with the web.',
          type: CollectionType.COLLECTION,
        },
        {
          id: 1,
          name: 'Angular',
          description: 'Angular is a platform that makes it easy to build applications with the web.',
          type: CollectionType.COLLECTION,
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  open(item: HTMLElement){
    let collection = item.querySelector('.collection');
    collection?.classList.toggle('active')
    let topicList = item.querySelector('.topic-list');
    topicList?.toggleAttribute('hidden');
  }

}
