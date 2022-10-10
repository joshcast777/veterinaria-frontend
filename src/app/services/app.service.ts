import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { Button, User } from "../interfaces/app.interface";

@Injectable({
	providedIn: "root"
})
export class AppService {
	private urlApi: string = environment.urlApi;

	private _user?: User;
	private _visible: boolean = false;
	private _nav_items: Button[] = [
		{ label: "Inicio", link: "/" },
		{ label: "Nosotros", link: "/about" },
		{ label: "Servicios", link: "/services" },
		{ label: "Citas", link: "/appointments" },
		{ label: "Blog", link: "/blog" }
	];

	constructor(private _http: HttpClient) {}

	public get NavItems(): Button[] {
		return this._nav_items;
	}

	public get User(): User {
		return this._user!;
	}

	public get Visible(): boolean {
		return this._visible;
	}

	public set Visible(value: boolean) {
		this._visible = value;
	}

	getUserByEmail(): void {
		this._http.get<User>(`${this.urlApi}/api/User/ByEmail/${localStorage.getItem("email")}`).subscribe((user: User): User => (this._user = user));
	}
}
