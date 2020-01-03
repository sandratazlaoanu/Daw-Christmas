import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import List from 'src/app/models/List';
import { TodoService } from 'src/app/services/todo/todo.service';
import User from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lists',
	templateUrl: './romanian-page.component.html',
	styleUrls: [ './romanian-page.component.css' ]
})
export class RomanianPageComponent implements OnInit {
	lists: List[];
	user: User;
	selectedList: List;
	addNew: boolean = false;
	saveNew: boolean = true;
	@ViewChild('newListName', { static: false })
	newListName: ElementRef;

	constructor(private todoService: TodoService, public router: Router) {}

	async ngOnInit() {
		this.lists = await this.todoService.getLists();
	}

	async onAddNewElementToList() {
		this.saveNew = false;
		let newList = new List(this.newListName.nativeElement.value);
		this.lists.push(newList);
		this.addNew = await this.todoService.addList(newList.name);
	}

	onClick(list: List) {
		this.selectedList = list;
	}

	onKey() {
		this.saveNew = this.newListName.nativeElement.value == '';
	}

	toggleSection() {
		this.addNew = !this.addNew;
	}

	onDeleteList() {
		this.todoService
			.deleteList(this.selectedList.name)
			.then((response: any) => {
				this.lists = this.lists.filter((value) => {
					return value !== this.selectedList;
				});
				this.selectedList = null;
			})
			.catch((err) => {
				return false;
			});
	}
}
