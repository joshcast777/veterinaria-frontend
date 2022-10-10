import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Card, Layout, Service, Team, TextImage } from "../interfaces/app.interface";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class PagesService {
	private urlApi: string = environment.urlApi;

	// About Section
	private _aboutSection: [TextImage, Layout] = [
		{
			title: "Veterinaria",
			boldTitle: "MediPet",
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga eveniet sint distinctio autem ut non numquam saepe unde, voluptate ipsum, quae hic, vitae necessitatibus quaerat porro atque velit? Tenetur?",
			imagePath: "about.jpg"
		},
		{
			layout: "small-right-layout",
			imageShape: "image-ltr"
		}
	];

	// Service Section
	private _serviceSection: [TextImage, Layout] = [
		{
			title: "Nuestros",
			boldTitle: "Servicios",
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga eveniet sint distinctio autem ut non numquam saepe unde, voluptate ipsum, quae hic, vitae necessitatibus quaerat porro atque velit? Tenetur?",
			imagePath: "service.jpg"
		},
		{
			layout: "small-right-layout",
			reverse: true,
			imageShapeReverse: "image-ltr-reverse"
		}
	];

	constructor(private http: HttpClient) {}

	public get AboutSection(): [TextImage, Layout] {
		return [...this._aboutSection];
	}

	public get ServiceSection(): [TextImage, Layout] {
		return [...this._serviceSection];
	}

	getOnlyServices(): Observable<Service[]> {
		return this.http.get<Service[]>(`${this.urlApi}/api/Service/OnlyServices`);
	}

	getServices(): Observable<Service[]> {
		return this.http.get<Service[]>(`${this.urlApi}/api/Service`);
	}

	getTeam(): Observable<Team[]> {
		return this.http.get<Team[]>(`${this.urlApi}/api/Team`);
	}
}
