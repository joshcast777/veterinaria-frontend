import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/interfaces/app.interface';
import { AppService } from 'src/app/services/app.service';
import { AppointmentService } from '../../appointment.service';

@Component({
	selector: 'cmp-form-appointment',
	templateUrl: './appointment-form.component.html',
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
export class AppointmentFormComponent {
	myForm: FormGroup = this.formBuilder.group({
		appointmentDate: [, [Validators.required]],
		reasons: [, [Validators.required]]
	});

	constructor(private formBuilder: FormBuilder, private _appService: AppService, private _appointmentService: AppointmentService, private _route: Router) {}

	save(): void {
		const appointment: Appointment = this.myForm.value;
		appointment.userId = this._appService.User!.userId;

		this._appointmentService.saveAppointment(appointment).subscribe((response: string): void => {
			if (response === "OK") this._route.navigate(["/user/appointments"]);
		});
	}

	cancel(): void {
		this._route.navigate(["/user/appointments"]);
	}
}
