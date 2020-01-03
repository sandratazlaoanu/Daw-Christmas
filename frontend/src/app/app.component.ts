import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo/todo.service';
import List from './models/List';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	ngOnInit() {
		this.playAudio();
	}
	playAudio() {
		let audio = new Audio();
		audio.src = 'src/assets/song/Blue Christmas - Michael Buble.mp3';

		audio.load();
		audio.play();
	}
}
