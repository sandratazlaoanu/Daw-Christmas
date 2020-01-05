import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import List from 'src/app/models/List';

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private static readonly BASE_URL = 'http://localhost:8080';
	constructor(private httpClient: HttpClient) {}

	getLists(): Promise<List[]> {
		return this.httpClient.get<List[]>(`${TodoService.BASE_URL}/lists`).toPromise();
	}

	addList(name: string): Promise<boolean> {
		return this.httpClient
			.post(`${TodoService.BASE_URL}/addList`, {
				name: name
			})
			.toPromise()
			.then((response: any) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
	}

	deleteList(name: string): Promise<{}> {
		const url = `${TodoService.BASE_URL}/list/${name}`;
		return this.httpClient
			.delete(url)
			.toPromise()
			.then((response: any) => {
				return true;
			})
			.catch((err) => {
				return false;
			});
	}
}
