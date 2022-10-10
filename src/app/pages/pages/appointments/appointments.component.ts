import { Component } from "@angular/core";

import { Message } from "primeng/api";
import { AuthService } from "src/app/auth/auth.service";
import { Layout, TextImage } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-appointments",
	template: `
		<!-- Header Page -->
		<cmp-header-page title="Citas" class="md:mb-10"></cmp-header-page>

		<cmp-section-divider></cmp-section-divider>

		<!-- Warning -->
		<div *ngIf="!ValidatedToken" class="ctr px-2">
			<p-messages [(value)]="message" [closable]="false"></p-messages>
		</div>

		<!-- About Section -->
		<cmp-text-image [textImage]="textImageAp" [layout]="layoutAp" class="mb-10"></cmp-text-image>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class AppointmentsComponent {
	layoutAp: Layout = {
		reverse: true,
		layout: "small-left-layout",
		imageShapeReverse: "image-ltr-reverse"
	};

	textImageAp: TextImage = {
		title: "Reserva una",
		boldTitle: "Cita",
		body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis fuga eveniet sint distinctio autem ut non numquam saepe unde, voluptate ipsum, quae hic, vitae necessitatibus quaerat porro atque velit? Tenetur?",
		imagePath: "about.jpg"
	};

	private _validatedToken: boolean = false;
	message: Message[] = [];

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.validateToken().subscribe((validatedToken: boolean): boolean => (this._validatedToken = validatedToken));

		if (this._validatedToken) {
			this.textImageAp.button = {
				label: "Agendar cita",
				link: "/user/appointments/new"
			};
		}

		this.message = [
			{
				severity: "warn",
				summary: "Advertencia",
				detail: "Debe iniciar seión para reservar una cita"
			}
		];
	}

	get ValidatedToken(): boolean {
		return this._validatedToken;
	}
}
