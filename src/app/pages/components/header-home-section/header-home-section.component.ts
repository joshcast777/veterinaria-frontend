import { Component } from "@angular/core";

@Component({
	selector: "cmp-header-home-section",
	templateUrl: "./header-home-section.component.html",
	styles: [
		`
			:host {
				display: block;
			}

			.header-bg {
				height: 70vh;
				max-height: 900px;
			}

			@media (min-width: 1024px) {
				.header-bg {
					height: 90vh;
				}
			}
		`
	]
})
export class HeaderHomeSectionComponent {}
