import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection, CollectionType } from '../../../interfaces/collection';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {

  @Input() idCollection!: number;
  collection!: Collection;
  addForm!: FormGroup;
  active: boolean = false;
  formTitle: string = 'Add Collection'

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl(''),
      url: new FormControl('')
    })
    if(this.idCollection == 0){
      this.activate('Add Collection');
    }else {
      this.collectionService.getCollectionById(this.idCollection)
      .subscribe((data: Collection) => this.collection = data);
    }

  }

  get name(){
    return this.addForm.get('name')!;
  }

  get url(){
    return this.addForm.get('url')!;
  }
  activate(title: string){
    this.active = true;
    this.formTitle = title;
  }

  onSubmit(){
    console.log(this.addForm.value);
    let type = this.formTitle.split(' ')[1];
    type = type.toUpperCase();
    let collection = {
      name: this.addForm.value.name,
      description: this.addForm.value.description,
      url: this.addForm.value.url,
      type: (<any>CollectionType)[type],
    }
    if(this.collection == undefined){
      this.collectionService.createCollection((collection as Collection)).subscribe((data: any) => {
        console.log(data)
        this.router.navigate([`/collection/${data.id}`]);
      })
    }else {
      console.log('Vai adicionar em uma coleção existente', this.collection.id)
      console.log('Conteúdo a ser adicionado', collection)
      this.collectionService.addContentToCollection(this.idCollection, collection as Collection)
        .subscribe((data: any) => {
          console.log(data)
          this.router.navigate([`/collection/${this.idCollection}`]);
        })
    }
  }

}
