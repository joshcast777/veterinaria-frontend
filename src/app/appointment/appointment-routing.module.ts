import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentFormComponent } from "./pages/appointment-form/appointment-form.component";

import { AppointmentIndexComponent } from "./pages/appointment-index/appointment-index.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "new",
				component: AppointmentFormComponent
			},
			{
				path: "",
				component: AppointmentIndexComponent
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
export class AppointmentRoutingModule {}
