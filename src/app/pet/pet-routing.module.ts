import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PetFormComponent } from "./pages/pet-form/pet-form.component";

import { PetIndexComponent } from "./pages/pet-index/pet-index.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "new",
				component: PetFormComponent
			},
			{
				path: "edit/:id",
				component: PetFormComponent
			},
			{
				path: "",
				component: PetIndexComponent
			},
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
export class PetRoutingModule {}
