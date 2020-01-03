import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import List from 'src/app/models/List';
import ListElement from 'src/app/models/ListElement';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
	selector: 'app-list-detail',
	templateUrl: './list-detail.component.html',
	styleUrls: [ './list-detail.component.css' ]
})
export class ListDetailComponent implements OnInit {
	@Input() list: List;
	@ViewChild('newName', { static: false })
	newName: ElementRef;
	@ViewChild('newBody', { static: false })
	newBody: ElementRef;
	selectedListElement: ListElement;
	addNew: boolean = false;
	saveNew: boolean = true;

	constructor(private todoService: TodoService) {}

	ngOnInit() {}

	// async onAddNewElementToList() {
	//   this.saveNew = false;
	//   let newListEllement = new ListElement(this.newName.nativeElement.value, this.newBody.nativeElement.value);
	//   this.list.listElements.push(newListEllement);
	//   this.addNew = await this.todoService.addListElement(this.list.name, newListEllement);
	// }

	toggleSection() {
		this.addNew = !this.addNew;
	}

	onKey() {
		this.saveNew = this.newName.nativeElement.value == '' || this.newBody.nativeElement.value == '';
	}

	onClick(selectedList: ListElement) {
		this.selectedListElement = selectedList;
	}

	unselectCurrentElement(value: ListElement) {
		this.selectedListElement = value;
	}
}
