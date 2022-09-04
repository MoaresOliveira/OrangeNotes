import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from '../interfaces/collection';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  boardActive: boolean = true;
  class: string = 'collection board';
  collections: Collection[] = []
  selectedCollection!: Collection;
  showModal: boolean = false;
  addingContent: boolean = true;
  idCollection!: number;

  constructor(private route: ActivatedRoute, private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.selectCollection();
  }

  getCollections(){
    this.collectionService.getCollections().subscribe((data: any) => {
      this.collections = data;
      this.selectedCollection = this.collections.find(collection => collection.id == this.idCollection)!;
      this.collections.forEach((collection)=> {
        this.collectionService.getCollectionContent(collection.id).subscribe((content) => {
          content.forEach(el => el.parent = collection);
          collection.content = content;
        })
      })
    })
  }

  selectCollection(){
    this.route.params.subscribe(params =>{
      let param = this.route.snapshot.paramMap.get('id');
      if(param?.startsWith('option')){
        this.showModal = true;
        this.addingContent = false
        this.idCollection = parseInt(param.split('-')[1]);
      }else if(param?.startsWith('add')){
        this.showModal = true;
        this.addingContent = true
        this.idCollection =  param == 'add-collection'? 0 :  parseInt(param.split('-')[1]);
      }else {
        this.idCollection = parseInt(param!);
        this.showModal = false;
        sessionStorage.setItem('previousCollection', this.idCollection.toString());
        this.getCollections();
      }
    });
  }

  navigateToCollection(){
    this.router.navigate(['/collection/'+ sessionStorage.getItem('previousCollection')]);
  }

  toggleList(){
    if(this.boardActive){
      this.boardActive = false;
      this.class = 'collection list'
    }else {
      this.boardActive = true;
      this.class = 'collection board'
    }
  }

}
