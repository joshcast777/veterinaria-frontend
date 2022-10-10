import { Component } from "@angular/core";

@Component({
	selector: "cmp-pharmacy-section",
	template: `
		<div class="bg-zinc-600 text-center text-neutral-100 py-16">
			<div>
				<h2 class="break-words text-4xl font-medium">{{ "Farmacia" | uppercase }}</h2>

				<img class="w-5/6 mx-auto my-16 max-w-2xl md:w-3/4" [src]="'pharmacy.jpeg' | image" alt="pharmacy" />

				<div class="w-5/6 mx-auto px-3 max-w-5xl text-xl font-medium leading-8  md:w-11/12">
					<p>Contamos con las medicinas necesarias para que tu mascota esté saludabl 🐶🐱</p>
					<p>Nuestros horarios de atención están diseñados para cualquier emergencia y contamos con farmacia con todos los medicamentos necesario para ayudar al amigo de cuatro patas que todos queremos.</p>
					<p>¡Siéntete segura/o y tu mascota también lo estará!</p>
				</div>
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
export class PharmacySectionComponent {}
