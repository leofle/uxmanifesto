import { Component }  from '@angular/core';
import { HTTPTestService } from '../http-test.service';

@Component({
	moduleId: module.id,
	selector: 'app-http-test',
	templateUrl: 'http-test.component.html',
	styleUrls: ['http-test.component.css'],
	providers: [HTTPTestService]
})

export class HTTPTestComponent {
	getData: string;
	getPromiseData: string;
	postData: string;

	constructor(private _httpService: HTTPTestService) { }

	onGet() {
		console.log('Getting user now.');
		this._httpService.getUser().subscribe(
			data => this.getData = JSON.stringify(data),
			error => alert(error),
			() => console.log('Finished Get')
		);
	}

	onPromiseGet() {
		console.log('Getting user based on promise now.');
		this._httpService.getUsersByPromise()
			.then(
			res => this.getPromiseData = JSON.stringify(res),
			err => alert(err)
			);

	}

	onPost() {
		this._httpService.postJson().subscribe(
			data => this.postData = JSON.stringify(data),
			error => alert(error),
			() => console.log('Finished Post')
		);
	}



}