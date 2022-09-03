import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() mostrar: boolean = false;
  @Output() mostrarChange: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  toggle () {
    this.mostrar = !this.mostrar;
    this.mostrarChange.emit(this.mostrar);
    this.route.navigate(['/collection']);
  }

}
