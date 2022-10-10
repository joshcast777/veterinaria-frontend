import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PersonalComponent } from "./pages/personal/personal.component";
import { UserIndexComponent } from "./pages/user-index/user-index.component";

const routes: Routes = [
	{
		path: "",
		component: UserIndexComponent,
		children: [
			{
				path: "appointments",
				loadChildren: () => import("../appointment/appointment.module").then(m => m.AppointmentModule)
			},
			{
				path: "pets",
				loadChildren: () => import("../pet/pet.module").then(m => m.PetModule)
			},
			{
				path: "",
				component: PersonalComponent
			},
			{
				path: "**",
				redirectTo: "page-not-found"
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}
