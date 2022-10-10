import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ComponentsModule } from "./components/components.module";
import { DirectivesModule } from "./directives/directives.module";
import { ModulesModule } from "./modules/modules.module";
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule],
	exports: [ComponentsModule, DirectivesModule, ModulesModule, PipesModule]
})
export class SharedModule {}
