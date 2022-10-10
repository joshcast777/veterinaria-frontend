import { Component } from "@angular/core";

@Component({
	selector: "cmp-choice",
	templateUrl: "./choice.component.html",
	styles: [
		`
			.tile-layout {
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex-wrap: wrap;
				gap: 30px;
			}

			@media (min-width: 1024px) {
				.tile-layout {
					flex-direction: row;

					.tile {
						flex-basis: calc(50% - 30px);
					}
				}
			}
		`
	]
})
export class ChoiceComponent {
	options = [
		{
			icon: "pi pi-heart-fill",
			title: "Title",
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni blanditiis, nemo sed error maxime repudiandae mollitia rerum necessitatibus vero nobis culpa nulla nesciunt perspiciatis unde nam, vitae possimus corrupti iure?"
		},
		{
			icon: "pi pi-bookmark-fill",
			title: "Title",
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni blanditiis, nemo sed error maxime repudiandae mollitia rerum necessitatibus vero nobis culpa nulla nesciunt perspiciatis unde nam, vitae possimus corrupti iure?"
		},
		{
			icon: "pi pi-filter-fill",
			title: "Title",
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni blanditiis, nemo sed error maxime repudiandae mollitia rerum necessitatibus vero nobis culpa nulla nesciunt perspiciatis unde nam, vitae possimus corrupti iure?"
		},
		{
			icon: "pi pi-flag-fill",
			title: "Title",
			body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni blanditiis, nemo sed error maxime repudiandae mollitia rerum necessitatibus vero nobis culpa nulla nesciunt perspiciatis unde nam, vitae possimus corrupti iure?"
		}
	];
}
