import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = 'Card Title';
  @Input() percent: number = 0;
  progress: string = '';
  percentAlign: string = ''

  constructor() {

  }

  ngOnInit(): void {
    let percent = this.percent;
    this.progress = percent + '%';
    this.percentAlign = percent > 7? `right: 0.5rem` : `right: -1.5rem`;
  }

}
