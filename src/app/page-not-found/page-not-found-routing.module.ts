import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
	{
		path: "",
		component: PageNotFoundComponent,
		children: [
			{
				path: "**",
				redirectTo: "/page-not-found"
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
