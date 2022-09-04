import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Collection, CollectionType } from '../../../interfaces/collection';
import { CollectionService } from '../../../services/collection.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() collection!: Collection;
  @Output() onAdd: EventEmitter<any> = new EventEmitter<any>();

  superCollection: boolean = false;
  class: string = 'content '
  isMedia: boolean = false;
  contextMenu = {
    active: false,
    x: 0,
    y: 0
  }

  constructor(private sanitizer: DomSanitizer, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.checkIfSuperCollection();
    this.checkIfMedia();
    if(this.isMedia) this.embed();
    this.class += this.collection.type;
    this.getContent();
  }

  onRightClick(event: MouseEvent){
    this.contextMenu.x = event.clientX
    this.contextMenu.y = event.clientY
    this.contextMenu.active = true;
  }

  getContent(){
    this.collectionService.getCollectionContent(this.collection.id!).subscribe((data: any) => {
      this.collection.content = data;
    })
  }

  addAction(){
    this.onAdd.emit();
  }

  embed(){
    let url: any = this.collection.url!;
    if(typeof url == 'object') return;
    if(this.collection.type == CollectionType.VIDEO){
      if(url.includes('youtube')){
        this.collection.url = this.sanitizeUrl(url!.replace('watch?v=', 'embed/'));
      }else if(url.includes('youtu.be')){
        this.collection.url = this.sanitizeUrl(url!.replace('youtu.be/', 'youtube.com/embed/'));
      }
    }else if(this.collection.type == CollectionType.AUDIO){
      if(url.includes('spotify')){
        this.collection.url = this.sanitizeUrl(url!.replace('track', 'embed/track')+ '?utm_source=generator&theme=0') ;
      }
    }
  }

  open(item: HTMLElement){
    let topicList = item.querySelector('.list');
    let chevron = (<HTMLImageElement>item.querySelector('.chevron'));
    item.classList.toggle('active')
    topicList?.toggleAttribute('hidden');
    if(item.classList.contains('active')){
      chevron.style.transform = 'rotate(0deg)';
    } else {
      chevron.style.transform = 'rotate(-90deg)';
    }
  }

  private sanitizeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url) as string;
  }

  private checkIfSuperCollection(){
    this.collection.parent == null ? this.superCollection = true : this.superCollection = false;
  }

  private checkIfMedia(){
    this.collection.type == 'VIDEO' ||
    this.collection.type == 'IMAGE' ||
    this.collection.type == 'AUDIO' ? this.isMedia = true : this.isMedia = false;
  }

}
