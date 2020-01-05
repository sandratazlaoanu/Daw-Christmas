import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ChristmasPageComponent } from '../pages/christmas-page/christmas-page.component';
import List from 'src/app/models/List';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
	selector: 'app-add-gift',
	templateUrl: './add-gift.component.html',
	styleUrls: [ './add-gift.component.css' ]
})
export class AddGiftComponent implements OnInit {
	constructor(private page: ChristmasPageComponent, private todoService: TodoService, public router: Router) {}

	lists: List[];
	selectedList: List;
	addNew: boolean = false;
	saveNew: boolean = true;
	display: boolean = false;
	@ViewChild('newListName', { static: false })
	newListName: ElementRef;

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
	closeModal() {
		this.page.display = false;
	}
}
