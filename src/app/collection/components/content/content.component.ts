import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Collection, CollectionType } from '../../../interfaces/collection';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() collection!: Collection;
  superCollection: boolean = false;
  class: string = 'content '
  isMedia: boolean = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.checkIfSuperCollection();
    this.checkIfMedia();
    this.embedVideo();
    console.log(this.collection.url);
    this.class += this.collection.type
  }

  embedVideo(){
    if(this.isMedia){
      let url = this.collection.url;
      if(this.collection.type == CollectionType.VIDEO){
        if(url?.includes('youtube')){
          this.collection.url = this.sanitizeUrl(url!.replace('watch?v=', 'embed/'));
        }else if(url?.includes('youtu.be')){
          this.collection.url = this.sanitizeUrl(url!.replace('youtu.be/', 'youtube.com/embed/'));
        }
      }else if(this.collection.type == CollectionType.AUDIO){
        if(url?.includes('spotify')){
          this.collection.url = this.sanitizeUrl(url!.replace('track', 'embed/track')+ '?utm_source=generator&theme=0') ;
        }
      }
    }
  }

  open(item: HTMLElement){
    let topicList = item.querySelector('.list');
    let chevron = (<HTMLImageElement>item.querySelector('.chevron'));
    item.classList.toggle('active')
    if(topicList?.innerHTML.includes('li')){
      topicList?.toggleAttribute('hidden');
    }
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
    this.collection.collection == null ? this.superCollection = true : this.superCollection = false;
  }

  private checkIfMedia(){
    this.collection.type == 'Video' ||
    this.collection.type == 'Image' ||
    this.collection.type == 'Audio' ? this.isMedia = true : this.isMedia = false;
  }

}
