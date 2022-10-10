import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IconButtonDirective } from './directives/icon-button.directive';
import { TextButtonDirective } from "./directives/text-button.directive";

@NgModule({
	declarations: [IconButtonDirective, TextButtonDirective],
	imports: [CommonModule],
	exports: [IconButtonDirective, TextButtonDirective]
})
export class DirectivesModule {}
