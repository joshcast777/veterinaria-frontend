import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";
import { UserService } from "../../user.service";

@Component({
	selector: "cmp-panel-account",
	templateUrl: "./panel-account.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class PanelAccountComponent {
	@Input() user?: User | void;

	myForm: FormGroup = this._formBuilder.group({
		email: [],
		password: []
	});

	constructor(private _formBuilder: FormBuilder, private _appService: AppService, private userService: UserService) {}

	ngOnInit(): void {
		setTimeout(() => {
			this.user = this._appService.User;
			this.myForm.setValue({
				email: this.user!.email,
				password: this.user!.password
			});
		}, 100);

		this.myForm.disable();
	}

	editAccount(): void {
		this.user!.email = this.myForm.value?.email;
		this.user!.password = this.myForm.value?.password;

		this.userService.updateUser(this.user!).subscribe((response: string): void => {
			if (response === "OK") this.ngOnInit();
			this.myForm.disable();
		});
	}

	cancel(): void {
		this.myForm.setValue({
			email: this.user!.email,
			password: this.user!.password
		});

		this.myForm.disable();
	}
}
