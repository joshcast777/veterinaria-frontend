import { Component, Input } from "@angular/core";

@Component({
	selector: "cmp-section-divider",
	template: `
		<div class="ctr px-2 my-10">
			<p-divider align="center" [layout]="layout">
				<i class="pi pi-th-large text-green-600/80"></i>
			</p-divider>
		</div>
	`,
	styles: []
})
export class SectionDividerComponent {
	@Input() layout: string = "horizontal";
}
