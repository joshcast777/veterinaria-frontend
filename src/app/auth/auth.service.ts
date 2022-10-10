import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable, of, tap } from "rxjs";

import { environment } from "src/environments/environment";
import { AuthResponse, AuthUser, User } from "../interfaces/app.interface";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private urlApi: string = environment.urlApi;

	constructor(private http: HttpClient, private _router: Router) {}

	validateToken(): Observable<boolean> {
		if (localStorage.getItem("jwt")) return of(true);
		else return of(false);
	}

	login(authUser: AuthUser): Observable<string> {
		return this.http.post<string>(`${this.urlApi}/api/AuthUser/Login`, authUser);
	}

	register(user: User): Observable<string> {
		return this.http.post<string>(`${this.urlApi}/api/AuthUser/Register`, user);
	}

	logout(): void {
		localStorage.removeItem("jwt");
		localStorage.removeItem("email");
		window.location.pathname = "/";
	}
}
