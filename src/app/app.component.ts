import { Component, OnInit } from "@angular/core";
import { AppService } from "./services/app.service";

@Component({
	selector: "cmp-root",
	template: `
		<div class="flex flex-col justify-between min-h-screen">
			<div class="flex-1">
				<cmp-header-nav class="sticky top-0 z-50"></cmp-header-nav>

				<cmp-sidebar></cmp-sidebar>

				<router-outlet></router-outlet>
			</div>

			<cmp-footer></cmp-footer>
		</div>
	`,
	styles: []
})
export class AppComponent implements OnInit {
	constructor(private _appService: AppService) {}

	ngOnInit(): void {
		this._appService.getUserByEmail();
	}
}
