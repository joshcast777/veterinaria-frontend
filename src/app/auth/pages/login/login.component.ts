import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Message } from "primeng/api";
import { AuthService } from "../../auth.service";

@Component({
	selector: "cmp-login",
	templateUrl: "./login.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class LoginComponent {
	message: Message[] = [];
	myForm: FormGroup = this.formBuilder.group({
		email: [, [Validators.required]],
		password: [, [Validators.required]]
	});

	constructor(private formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {}

	login(): void {
		this._authService.login(this.myForm.value).subscribe({
			next: (jwt: string): void => {
				localStorage.setItem("jwt", jwt);
				localStorage.setItem("email", this.myForm.value.email);
				window.location.pathname = "/";
			},
			error: () => {
				this.myForm.reset();

				this.message = [{ severity: "error", summary: "Error", detail: "Combinación errónea" }];
			}
		})
	}
}
