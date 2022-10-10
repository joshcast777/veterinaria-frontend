import { Component } from "@angular/core";
import { User } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";

@Component({
	selector: "cmp-personal",
	template: `
		<div class="max-w-3xl mx-auto">
			<h2 class="max-w-3xl mb-10 text-center font-bold text-2xl">Datos personales</h2>

			<cmp-panel-personal class="max-w-3xl mb-10"></cmp-panel-personal>

			<cmp-panel-account class="max-w-3xl mb-10"></cmp-panel-account>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class PersonalComponent {
	user?: User | void;

	constructor(private _appService: AppService) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.user = this._appService.User;
		}, 100);
	}
}
