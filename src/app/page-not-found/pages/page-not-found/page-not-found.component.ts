import { Component } from "@angular/core";

@Component({
	selector: "cmp-page-not-found",
	template: `
		<div class="my-16 h-full w-full flex justify-center items-center">
			<div class="ctr px-2 font-mono text-center">
				<h2 class="text-red-500 text-6xl font-extrabold mb-16 md:text-7xl">¡Qué mal!</h2>

				<p class="text-2xl mb-16">No se pudo encontrar la página</p>

				<a dtvTextButton class="text-xl" label="Volver al inicio" color="secondary" design="outlined" routerLink="/"></a>
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
export class PageNotFoundComponent {}
