import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { Appointment } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";
import { AppointmentService } from "../../appointment.service";

@Component({
	selector: "cmp-appointment-index",
	templateUrl: "./appointment-index.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class AppointmentIndexComponent implements OnInit {
	private _appointments: Appointment[] = [];
	message: Message[] = [];

	constructor(private _appointmentService: AppointmentService, private _appService: AppService) {}

	ngOnInit(): void {
		this._appointmentService.getAppointments(this._appService.User.userId).subscribe((appointments: Appointment[]): Appointment[] => (this._appointments = appointments));

		this.message = [
			{
				severity: "info",
				summary: "Información",
				detail: "No hay registros a mostrar"
			}
		];
	}

	get Appointments(): Appointment[] {
		return [...this._appointments];
	}

	delete(id: number): void {
		if (confirm('¿Está seguro de eliminar el registro?')) {
			this._appointmentService.deleteAppointment(id).subscribe((response: string): void => {
				if (response === "OK") this.ngOnInit();
			});
		}
	}
}
