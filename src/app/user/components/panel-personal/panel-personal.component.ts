import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";
import { UserService } from "../../user.service";

@Component({
	selector: "cmp-panel-personal",
	templateUrl: "./panel-personal.component.html",
	styles: [
		`
			:host {
				display: block;

				::ng-deep .calendar span {
					@apply w-full;

					input {
						@apply p-2 rounded-sm;
					}
				}

				::ng-deep .panel .p-panel-header {
					@apply py-2;
				}
			}
		`
	]
})
export class PanelPersonalComponent {
	@Input() user?: User | void;

	myForm: FormGroup = this._formBuilder.group({
		name: [],
		lastName: [],
		phone: [],
		address: []
	});

	constructor(private _formBuilder: FormBuilder, private _appService: AppService, private userService: UserService) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.user = this._appService.User;
			this.myForm.setValue({
				name: this.user!.name,
				lastName: this.user!.lastName,
				phone: this.user!.phone,
				address: this.user!.address
			});
		}, 100);

		this.myForm.disable();
	}

	editPersonal(): void {
		this.user!.name = this.myForm.value?.name;
		this.user!.lastName = this.myForm.value?.lastName;
		this.user!.phone = this.myForm.value?.phone;
		this.user!.address = this.myForm.value?.address;

		this.userService.updateUser(this.user!).subscribe((response: string): void => {
			if (response === "OK") this.ngOnInit();
			this.myForm.disable();
		});
	}

	
	cancel(): void {
		this.myForm.setValue({
			name: this.user!.name,
			lastName: this.user!.lastName,
			phone: this.user!.phone,
			address: this.user!.address
		});

		this.myForm.disable();
	}
}
