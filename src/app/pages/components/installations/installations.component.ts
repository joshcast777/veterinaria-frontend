import { Component } from "@angular/core";

@Component({
	selector: "cmp-installations",
	templateUrl: "./installations.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class InstallationsComponent {
	installations = [
		{ header: "Recepción", map: "map1.jpg", picture: "picture1.jpg" },
		{ header: "Consultorio 1", map: "map2.jpg", picture: "picture2.jpg" },
		{ header: "Consultorio 2", map: "map3.jpg", picture: "picture3.jpg" },
		{ header: "Rayos X", map: "map4.jpg", picture: "picture4.jpg" },
		{ header: "Quirófano", map: "map5.jpg", picture: "picture5.jpg" }
	];
}
