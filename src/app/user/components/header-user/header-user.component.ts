import { Component, Input } from "@angular/core";
import { Button, User } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-header-user",
	templateUrl: "./header-user.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class HeaderUserComponent {
	@Input() user?: User | void;
	
	buttons: Button[] = [
		{
			label: "Personal",
			link: "/user"
		},
		{
			label: "Citas",
			link: "/user/appointments"
		},
		{
			label: "Mascotas",
			link: "/user/pets"
		}
	];
}
