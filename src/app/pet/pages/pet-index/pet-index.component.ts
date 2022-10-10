import { Component, OnInit } from "@angular/core";
import { Message } from "primeng/api";
import { Pet } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";
import { PetService } from "../../pet.service";

@Component({
	selector: "cmp-pet-index",
	templateUrl: "./pet-index.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class PetIndexComponent implements OnInit {
	private _pets: Pet[] = [];
	message: Message[] = [];

	constructor(private _petService: PetService, private _appService: AppService) {}

	ngOnInit(): void {
		this._petService.getPets(this._appService.User.userId).subscribe((pets: Pet[]): Pet[] => (this._pets = pets));

		this.message = [
			{
				severity: "info",
				summary: "Información",
				detail: "No hay registros a mostrar"
			}
		];
	}

	get Pets(): Pet[] {
		return [...this._pets];
	}

	delete(id: number): void {
		if (confirm('¿Está seguro de eliminar el registro?')) {
			this._petService.deletePet(id).subscribe((response: string): void => {
				if (response === "OK") this.ngOnInit();
			});
		}
	}
}
