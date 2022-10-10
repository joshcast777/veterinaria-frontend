import { Component, OnInit } from "@angular/core";

import { PagesService } from "../../pages.service";
import { Card, Layout, Service, TextImage } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-home",
	templateUrl: "./home.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class HomeComponent implements OnInit {
	private _onlyServices: Service[] = [];

	constructor(private pagesService: PagesService) {}

	ngOnInit(): void {
		this.pagesService.getOnlyServices().subscribe((services: Service[]): Service[] => (this._onlyServices = services));
	}

	public get AboutSection(): [TextImage, Layout] {
		const aboutSection: [TextImage, Layout] = this.pagesService.AboutSection;

		aboutSection[0].button = {
			label: "Saber más",
			link: "/about"
		};

		return aboutSection;
	}

	public get ServiceSection(): [TextImage, Layout] {
		const serviceSection: [TextImage, Layout] = this.pagesService.ServiceSection;

		serviceSection[0].button = {
			label: "Nuestros servicios",
			link: "/services"
		};

		return serviceSection;
	}

	public get OnlyServices(): Card[] {
		return [...this._onlyServices];
	}
}
