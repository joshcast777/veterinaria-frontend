import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

@Component({
	selector: "cmp-blog-filter-form",
	templateUrl: "./blog-filter-form.component.html",
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
export class BlogFilterFormComponent {
	maxDate: Date = new Date();
	myForm: FormGroup = this.formBuilder.group({
		title: [],
		dateFrom: [, [this.maxDateValidator]],
		dateTo: [, [this.maxDateValidator]]
	});

	constructor(private formBuilder: FormBuilder) {}

	maxDateValidator(control: FormControl): ValidationErrors | null {
		const value: string = control.value;

		if (new Date(value) >= new Date()) return { maxDate: true };

		return null;
	}

	validDate(): boolean | undefined {
		return this.myForm.controls["dateFrom"].errors?.["maxDate"] || this.myForm.controls["dateTo"].errors?.["maxDate"];
	}

	filter(): void {}
}
