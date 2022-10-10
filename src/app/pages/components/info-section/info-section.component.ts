import { Component } from "@angular/core";

import { Section } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-info-section",
	templateUrl: "./info-section.component.html",
	styleUrls: ["./info-section.component.scss"]
})
export class InfoSectionComponent {
	sections: Section[] = [
		{
			label: "Nosotros",
			link: "/about",
			imagePath: "img1.jpg"
		},
		{
			label: "Tienda",
			link: "/store",
			imagePath: "img2.jpg"
		},
		{
			label: "Blog",
			link: "/blog",
			imagePath: "img3.jpg"
		}
	];
}
