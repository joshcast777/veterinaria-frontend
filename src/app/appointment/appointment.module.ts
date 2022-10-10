import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";

import { AppointmentRoutingModule } from "./appointment-routing.module";
import { AppointmentIndexComponent } from "./pages/appointment-index/appointment-index.component";
import { AppointmentFormComponent } from "./pages/appointment-form/appointment-form.component";

@NgModule({
	declarations: [AppointmentIndexComponent, AppointmentFormComponent],
	imports: [CommonModule, AppointmentRoutingModule, SharedModule]
})
export class AppointmentModule {}
