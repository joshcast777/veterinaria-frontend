import { Component } from "@angular/core";

import { AppService } from "src/app/services/app.service";
import { Button, User } from "src/app/interfaces/app.interface";
import { AuthService } from "src/app/auth/auth.service";

@Component({
	selector: "cmp-header-nav",
	templateUrl: "./header-nav.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class HeaderNavComponent {
	user?: User | void;

	constructor(private _appService: AppService, private _authService: AuthService) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.user = this._appService.User;
		}, 100);
	}

	get Visible(): boolean {
		return this._appService.Visible;
	}

	set Visible(value: boolean) {
		this._appService.Visible = value;
	}

	get NavItems(): Button[] {
		return this._appService.NavItems;
	}

	logout(): void {
		this._authService.logout();
	}
}
