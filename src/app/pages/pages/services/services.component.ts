import { Component, OnInit } from "@angular/core";

import { PagesService } from "../../pages.service";
import { Card, Layout, Service, TextImage } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-services",
	templateUrl: "./services.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class ServicesComponent implements OnInit {
	private _services: Service[] = [];

	constructor(private pagesService: PagesService) {}

	ngOnInit(): void {
		this.pagesService.getServices().subscribe((services: Service[]): Service[] => (this._services = services));
	}

	public get ServiceSection(): [TextImage, Layout] {
		const serviceSection: [TextImage, Layout] = this.pagesService.ServiceSection;

		delete serviceSection[0].button;

		return serviceSection;
	}

	public get Services(): Card[] {
		return this._services.filter((service: Service): boolean => service.type === "SERVICE");
	}

	public get Specialities(): Card[] {
		return this._services.filter((service: Service): boolean => service.type === "SPECIALITY");
	}
}
