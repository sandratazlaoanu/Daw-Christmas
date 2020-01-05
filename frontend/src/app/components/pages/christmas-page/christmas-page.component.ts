import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lists',
	templateUrl: './christmas-page.component.html',
	styleUrls: [ './christmas-page.component.css' ]
})
export class ChristmasPageComponent implements OnInit {
	display: boolean = false;
	constructor(private todoService: TodoService, public router: Router) {}
	ngOnInit() {}
	openModal() {
		this.display = true;
	}
}
