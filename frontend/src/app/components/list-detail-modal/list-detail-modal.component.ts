import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import ListElement from 'src/app/models/ListElement';


@Component({
  selector: 'app-list-detail-modal',
  templateUrl: './list-detail-modal.component.html',
  styleUrls: ['./list-detail-modal.component.css']
})
export class ListDetailModalComponent implements OnInit {
  @Input() listElement: ListElement;
  @Output() unselectListElement = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.listElement = null;
    this.unselectListElement.emit(null);
  }
}
