import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";

import { SharedModule } from "../shared/shared.module";

import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

@NgModule({
	declarations: [PageNotFoundComponent],
	imports: [CommonModule, PageNotFoundRoutingModule, SharedModule]
})
export class PageNotFoundModule {}
