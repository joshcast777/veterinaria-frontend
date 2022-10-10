import { Component } from "@angular/core";

@Component({
	selector: "cmp-aside",
	templateUrl: "./aside.component.html",
	styles: [
		`
			:host {
				display: block;

				::ng-deep .social-links i {
					@apply text-3xl text-purple-500;
				}
			}
		`
	]
})
export class AsideComponent {}
