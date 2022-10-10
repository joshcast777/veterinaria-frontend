import { Component, Input } from "@angular/core";

@Component({
	selector: "cmp-title",
	template: `
		<div class="ctr my-10 bg-gradient-to-r from-purple-200/50">
			<div class="px-2 md:flex md:items-center gap-5">
				<div *ngIf="alignText === 'right' || alignText === 'center'" class="hidden md:block md:flex-1 md:h-0.5 md:bg-gradient-to-l md:from-white/0 md:to-purple-500"></div>

				<h2 class="break-words py-5 text-{{ this.alignText }} text-4xl font-extralight text-purple-600 md:flex-none">{{ label | uppercase }}</h2>

				<div *ngIf="alignText === 'left' || alignText === 'center'" class="hidden md:block md:flex-1 md:h-0.5 md:bg-gradient-to-r md:from-white/0 md:to-purple-500"></div>
			</div>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class TitleComponent {
	@Input() label: string = "Title";
	@Input() alignText: "left" | "center" | "right" = "left";
}
