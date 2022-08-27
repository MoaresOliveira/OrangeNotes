import { Component, Input, OnInit } from '@angular/core';
import { Collection, CollectionType } from '../../../interfaces/collection';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() collection: Collection = {
    id: 1,
    name: 'Angular',
    description: 'Angular is a platform that makes it easy to build applications with the web.',
    type: CollectionType.COLLECTION,
    content: []
  };
  nothing: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let documentacaoAngular: Collection = {
      id: 5,
      name: 'Documentação Angular',
      description: 'Logo oficial do Angular',
      url: 'https://open.spotify.com/track/1eT2CjXwFXNx6oY5ydvzKU?si=5850e1f8a4004f43',
      type: CollectionType.AUDIO,
    }
    let angularCli: Collection = {
      id: 2,
      name: 'Angular CLI',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
      type: CollectionType.COLLECTION,
      collection: this.collection
    }
    let angularMaterial: Collection = {
      id: 3,
      name: 'Angular Material',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
      type: CollectionType.COLLECTION,
      collection: angularCli
    }
    let angularForms: Collection = {
      id: 4,
      name: 'Angular Forms',
      description: 'Angular is a platform that makes it easy to build applications with the web.',
      type: CollectionType.CONTENT,
      collection: angularMaterial
    }
    documentacaoAngular.collection = angularCli
    angularMaterial.content = [angularForms];
    angularCli.content = [angularMaterial, documentacaoAngular];
    this.collection.content = [angularCli];

    if(this.collection?.content?.length == 0){
    this.collection.content = [

    ]
    if (this.collection === undefined) {
      this.nothing = true;
    }
  }
}

}
