import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpTestService {
	constructor(private _http: Http) { }
    getUser() {
		return this._http.get("http://jsonplaceholder.typicode.com/users/1")
			.map(res => res.json());
    };

    postJson() {
		var json = JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1
		});
		var params = 'data=' + json;
		var header = new Headers();
		header.append('Content-type', 'application/x-www-form-urlencoded');

		return this._http.post("http://jsonplaceholder.typicode.com/posts", params, {
			headers: header
		})
			.map(res => res.json());
    };

    getUsersByPromise() {
		return this._http.get("http://jsonplaceholder.typicode.com/users")
			.toPromise()
			.then(res => res.json());
    }
}
