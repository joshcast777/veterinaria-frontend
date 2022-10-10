import { Component } from "@angular/core";

@Component({
	selector: "cmp-footer",
	templateUrl: "./footer.component.html",
	styles: [
		`
			:host {
				display: block;

				::ng-deep .social-links i {
					@apply text-2xl text-purple-500;
				}
			}
		`
	]
})
export class FooterComponent {}
