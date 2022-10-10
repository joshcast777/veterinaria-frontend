import { Component, OnInit } from "@angular/core";

import { PagesService } from "../../pages.service";
import { Card, Layout, SocialLink, Team, TextImage } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-about",
	templateUrl: "./about.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class AboutComponent implements OnInit {
	private _team: Team[] = [];

	constructor(private pagesService: PagesService) {}

	ngOnInit(): void {
		this.pagesService.getTeam().subscribe((team: Team[]): Team[] => (this._team = team));
	}

	public get AboutSection(): [TextImage, Layout] {
		const aboutSection: [TextImage, Layout] = this.pagesService.AboutSection;

		delete aboutSection[0].button;

		return aboutSection;
	}

	public get Team(): Card[] {
		const team: Team[] = [...this._team];

		let cards: Card[] = [];

		team.forEach((t: Team, i: number): void => {
			const card: Card = {
				title: `${t.degree} ${t.fullName}`,
				subtitle: t.ocupation,
				imagePath: t.imagePath,
				body: t.body,
				socialLinks: {
					facebookLink: t.socialLink.facebookLink,
					instagramLink: t.socialLink.instagramLink,
					twitterLink: t.socialLink.twitterLink
				}
			};

			cards.push(card);
		});

		return cards;
	}
}
