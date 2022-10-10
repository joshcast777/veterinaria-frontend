import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../interfaces/app.interface';

@Injectable({
	providedIn: 'root'
})
export class AppointmentService {
	private urlApi: string = environment.urlApi;

	constructor(private _http: HttpClient) {}

	getAppointments(id: number): Observable<Appointment[]> {
		return this._http.get<Appointment[]>(`${this.urlApi}/api/Appointment/${id}`);
	}

	// getAppointmentsByIg(id: number): Observable<Appointment> {
	// 	return this._http.get<Appointment>(`${this.urlApi}/api/Appointment/${id}`);
	// }

	saveAppointment(appointment: Appointment): Observable<string> {
		return this._http.post<string>(`${this.urlApi}/api/Appointment`, appointment);
	}

	deleteAppointment(id: number): Observable<string> {
		return this._http.delete<string>(`${this.urlApi}/api/Appointment/${id}`);
	}
}
