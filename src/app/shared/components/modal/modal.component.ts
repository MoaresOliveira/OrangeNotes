import { Location } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {

  @Input() show: boolean = false;
  @Output() showChange: EventEmitter<any> = new EventEmitter();
  @Input() onClose!: () => void;

  constructor(private router: Router) { }

  toggle () {
    this.show = !this.show;
    this.showChange.emit(this.show);
    this.onClose();
  }

}
