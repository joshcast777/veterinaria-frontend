import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Message } from "primeng/api";
import { AuthService } from "../../auth.service";

@Component({
	selector: "cmp-register",
	templateUrl: "./register.component.html",
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
			}
		`
	]
})
export class RegisterComponent {
	message: Message[] = [];
	myForm: FormGroup = this.formBuilder.group({
		dni: [, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
		name: [, [Validators.required]],
		lastName: [, [Validators.required]],
		phone: [, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
		birthDate: [, [Validators.required]],
		address: [, [Validators.required]],
		email: [, [Validators.required]],
		password: [, [Validators.required]]
	});

	constructor(private formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {}

	register(): void {
		this._authService.register(this.myForm.value).subscribe({
			next: (jwt: string): void => {
				localStorage.setItem("jwt", jwt);
				localStorage.setItem("email", this.myForm.value.email);
				this._router.navigate(["/"]);
			},
			error: () => {
				this.myForm.reset();

				this.message = [{ severity: "error", summary: "Error", detail: "No se pudo crear el usuario" }];
			}
		})
	}
}
