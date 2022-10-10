import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppointmentsComponent } from "./pages/appointments/appointments.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{ path: "", component: HomeComponent },
			{ path: "about", component: AboutComponent },
			{ path: "services", component: ServicesComponent },
			{ path: "appointments", component: AppointmentsComponent },
			{ path: "**", redirectTo: "page-not-found" }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
