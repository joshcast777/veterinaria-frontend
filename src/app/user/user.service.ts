import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/app.interface';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private urlApi: string = environment.urlApi;
	
	constructor(private _http: HttpClient) { }

	updateUser(user: User): Observable<string> {
		return this._http.put<string>(`${this.urlApi}/api/User/${user.userId}`, user);
	}
}
