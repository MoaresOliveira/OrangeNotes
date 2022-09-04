import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Collection } from '../../../interfaces/collection';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.scss']
})
export class AddTextComponent implements OnInit, AfterViewInit {

  textarea!: HTMLTextAreaElement;

  @Input() collection!: Collection;

  active: boolean = false;
  class: string = 'inactive-add-text'
  rowCounter: number = 1;

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  keydown(event: KeyboardEvent) {
    if(this.textarea == undefined){
      this.textarea = event.target as HTMLTextAreaElement;
    }
    if(this.rowCounter > 10 ) this.deactivate();
    if (event.key === 'Enter' && !event.shiftKey) {
      this.addTextToCollection(this.textarea.value);
      this.deactivate();
    }else if(event.key === 'Enter' && event.shiftKey) {
      this.rowCounter++;
    }
  }

  activate(item: HTMLDivElement){
    this.active = true;
    this.class = 'active-add-text';
    this.rowCounter = 1;
    this.textarea?.focus();
  }

  deactivate() {
    this.active = false;
    this.class = 'inactive-add-text';
  }

  addTextToCollection(text: string){
    let content = {
      name: text,
      description: text,
      type: 'CONTENT'
    }
    this.collectionService.addContentToCollection(this.collection.id, (content as Collection))
      .subscribe((result) => {
        this.router.navigate(['/collection']).then(() => {
          this.router.navigate(['/collection/' + this.collection.id]);
        });
      });
  }

}
