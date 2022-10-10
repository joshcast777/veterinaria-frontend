import { Component, HostListener } from "@angular/core";

import { AppService } from "src/app/services/app.service";
import { Button } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-sidebar",
	templateUrl: "./sidebar.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class SidebarComponent {
	@HostListener("window:resize", ["$event"]) onResize(event: any): void {
		if (event.target.innerWidth >= 1024) this.Visible = false;
	}

	constructor(private app_service: AppService) {}

	get Visible(): boolean {
		return this.app_service.Visible;
	}

	set Visible(value: boolean) {
		this.app_service.Visible = value;
	}

	get NavItems(): Button[] {
		return this.app_service.NavItems;
	}
}
