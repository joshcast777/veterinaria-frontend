import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesRoutingModule } from "./pages-routing.module";

import { SharedModule } from "../shared/shared.module";

// Pages
import { AboutComponent } from "./pages/about/about.component";
import { AppointmentsComponent } from "./pages/appointments/appointments.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";

// Components
import { HeaderHomeSectionComponent } from "./components/header-home-section/header-home-section.component";
import { InfoSectionComponent } from "./components/info-section/info-section.component";
import { PharmacySectionComponent } from "./components/pharmacy-section/pharmacy-section.component";
import { ChoiceComponent } from "./components/choice/choice.component";
import { AsideComponent } from "./components/aside/aside.component";
import { InstallationsComponent } from "./components/installations/installations.component";

@NgModule({
	declarations: [
		// Pages
		AboutComponent,
		AppointmentsComponent,
		HomeComponent,
		ServicesComponent,
		// Components
		HeaderHomeSectionComponent,
		InfoSectionComponent,
		PharmacySectionComponent,
		ChoiceComponent,
		AsideComponent,
		InstallationsComponent
	],
	imports: [CommonModule, PagesRoutingModule, SharedModule]
})
export class PagesModule {}
