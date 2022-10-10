import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { SocialLink } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-social-links",
	template: `
		<div class="my-2">
			<i *ngFor="let icon of icons" class="pi pi-{{ icon.icon }} cursor-pointer mx-4 first-of-type:mx-0 last-of-type:mx-0" (click)="redirectLink(icon.socialLink)"></i>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class SocialLinksComponent {
	icons?: { icon: string; socialLink: string }[] = [
		{ icon: "facebook", socialLink: "https://www.facebook.com/" },
		{ icon: "instagram", socialLink: "https://www.instagram.com/" },
		{ icon: "twitter", socialLink: "https://twitter.com/" }
	];

	constructor(private _router: Router) {}

	redirectLink(socialLink: string): void {
		this._router.navigate([]).then((): Window | null => window.open(socialLink, "_blank"));
	}
}
