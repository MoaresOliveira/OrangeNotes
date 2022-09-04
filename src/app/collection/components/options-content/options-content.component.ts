import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection, CollectionType } from '../../../interfaces/collection';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-options-content',
  templateUrl: './options-content.component.html',
  styleUrls: ['./options-content.component.scss']
})
export class OptionsContentComponent implements OnInit {

  @Input() idCollection!: number;
  collection!: Collection;
  editForm!: FormGroup;
  active: boolean = false;
  formTitle: string = 'Options'

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.collectionService.getCollectionById(this.idCollection)
      .subscribe((data: any) => this.collection = data);
  }

  get name(){
    return this.editForm.get('name')!;
  }

  get url(){
    return this.editForm.get('url')!;
  }

  addContent(){
    this.router.navigate([`/collection/add-${this.collection.id}`]);
  }

  markAsFinished(){
    this.collectionService.finishCollection(this.idCollection)
      .subscribe(data => {
        this.router.navigate([`/collection/${sessionStorage.getItem('previousCollection')}`]);
      })
  }

  editCollection(){
    this.formTitle = 'Edit Collection';
    let urlRequired = this.collection.type != CollectionType.COLLECTION && this.collection.type != CollectionType.CONTENT;
    this.editForm = new FormGroup({
      name: new FormControl(this.collection.name,[Validators.required]),
      description: new FormControl(this.collection.description),
      url: new FormControl(this.collection.url,
          urlRequired ? [Validators.required] : []
        ),
    })
    this.active = true;
  }

  deleteCollection(){
    let confirmed = confirm("Are you sure you want to delete this collection?");
    if(confirmed){
      this.collectionService.deleteCollection(this.idCollection)
        .subscribe(data => {
          this.router.navigate([`/collection/${sessionStorage.getItem('previousCollection')}`]);
        })
    }
  }

  onSubmit(){
    let type = this.formTitle.split(' ')[1];
    type = type.toUpperCase();
    let collection = {
      name: this.editForm.value.name,
      description: this.editForm.value.description,
      url: this.editForm.value.url
    }
    this.collectionService.updateCollection(this.idCollection, collection as Collection)
      .subscribe(data => {
        this.router.navigate([`/collection/${sessionStorage.getItem('previousCollection')}`]);
      })
  }

}
