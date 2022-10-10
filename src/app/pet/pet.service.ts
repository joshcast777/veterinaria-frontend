import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet } from '../interfaces/app.interface';

@Injectable({
	providedIn: 'root'
})
export class PetService {
	private urlApi: string = environment.urlApi;

	constructor(private _http: HttpClient) {}

	getPets(id: number): Observable<Pet[]> {
		return this._http.get<Pet[]>(`${this.urlApi}/api/Pet/ByUser/${id}`);
	}

	getPetById(id: number): Observable<Pet> {
		return this._http.get<Pet>(`${this.urlApi}/api/Pet/${id}`);
	}

	savePet(pet: Pet): Observable<string> {
		return this._http.post<string>(`${this.urlApi}/api/Pet`, pet);
	}

	editPet(pet: Pet): Observable<string> {
		return this._http.put<string>(`${this.urlApi}/api/Pet/${pet.petId}`, pet);
	}

	deletePet(id: number): Observable<string> {
		return this._http.delete<string>(`${this.urlApi}/api/Pet/${id}`);
	}
}
