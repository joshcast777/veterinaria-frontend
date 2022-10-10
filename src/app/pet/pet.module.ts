import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PetRoutingModule } from "./pet-routing.module";

import { SharedModule } from "../shared/shared.module";

// Pages
import { PetIndexComponent } from "./pages/pet-index/pet-index.component";
import { PetFormComponent } from './pages/pet-form/pet-form.component';

@NgModule({
	declarations: [PetIndexComponent, PetFormComponent],
	imports: [CommonModule, PetRoutingModule, SharedModule]
})
export class PetModule {}
