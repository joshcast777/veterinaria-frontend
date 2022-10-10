import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ImagePipe } from "./pipes/image.pipe";
import { SvgPipe } from "./pipes/svg.pipe";

@NgModule({
	declarations: [ImagePipe, SvgPipe],
	imports: [CommonModule],
	exports: [ImagePipe, SvgPipe]
})
export class PipesModule {}
