import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { PrimeNgModule } from "./modules/prime-ng.module";

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [HttpClientModule, ReactiveFormsModule, PrimeNgModule]
})
export class ModulesModule {}
