import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";

@Component({
	selector: "cmp-user-index",
	templateUrl: "./user-index.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class UserIndexComponent implements OnInit {
	user?: User | void;

	constructor(private _appService: AppService) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.user = this._appService.User;
		}, 100);
	}
}
