import { Component, Input } from "@angular/core";

@Component({
	selector: "cmp-header-page",
	template: `
		<div class="max-w-screen-2xl h-80 mx-auto bg-center bg-cover bg-no-repeat" style="background-image: url({{ 'header-page.jpg' | image }})">
			<div class="w-full h-full px-16 bg-black/75 flex justify-center items-center">
				<h2 class="text-slate-50 text-7xl font-bold">{{ title }}</h2>
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
export class HeaderPageComponent {
	@Input() title: string = "Title";
}
