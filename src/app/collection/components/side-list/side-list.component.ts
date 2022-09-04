import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection, CollectionType } from '../../../interfaces/collection';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss']
})
export class SideListComponent implements OnInit {

  @Input() collections: Collection[] = [];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
  }

  open(item: HTMLElement){
    let collection = item.querySelector('.collection');
    collection?.classList.toggle('active')
    let topicList = item.querySelector('.topic-list');
    topicList?.toggleAttribute('hidden');
  }

}
