import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Pet } from 'src/app/interfaces/app.interface';
import { AppService } from 'src/app/services/app.service';
import { PetService } from '../../pet.service';

@Component({
	selector: 'cmp-pet-form',
	templateUrl: './pet-form.component.html',
	styles: [
		`
			:host {
				display: block;

				::ng-deep .number span {
					@apply w-full;

					input {
						@apply p-2 rounded-sm;
					}
				}
			}
		`
	]
})
export class PetFormComponent implements OnInit {
	private _pet!: Pet;
	private _title: string = "";
	private _linkPath: string = this._route.url === "/user/pets/new" ? "NEW" : "EDIT";

	myForm: FormGroup = this.formBuilder.group({
		name: [, [Validators.required]],
		animal: [, [Validators.required]],
		age: [, [Validators.required]],
		vaccines: [, [Validators.required]],
		sex: [, [Validators.required]]
	});

	constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private _appService: AppService, private _petService: PetService, private _route: Router) {}

	ngOnInit(): void {
		if (this._linkPath === "NEW") this._title = "Nueva Mascota";
		else {
			this._title = "Editar Mascota";

			this.activatedRoute.params.pipe(
				switchMap(({ id }: Params): Observable<Pet> => (this._petService.getPetById(id)))
			).subscribe((pet: Pet): void => {
				this._pet = pet
			});
			
			setTimeout(() => {
				this.myForm.setValue({
					name: this._pet.name,
					animal: this._pet.animal,
					age: this._pet.age,
					vaccines: this._pet.vaccines,
					sex: this._pet.sex
				});
			}, 1000);
		}
	}

	get Title(): string {
		return this._title;
	}

	get LinkPath(): string {
		return this._linkPath;
	}

	save(): void {
		const pet: Pet = this.myForm.value;
		pet.userId = this._appService.User!.userId;

		this._petService.savePet(pet).subscribe((response: string): void => {
			if (response === "OK") this._route.navigate(["/user/pets"]);
		});
	}

	edit(): void {
		const pet: Pet = this.myForm.value;
		pet.petId = this._pet?.petId!;
		pet.userId = this._pet?.userId!;
		pet.status = this._pet?.status!;
		pet.createdAt = this._pet?.createdAt!;

		this._petService.editPet(pet).subscribe((response: string): void => {
			if (response === "OK")  this._route.navigate(["/user/pets"]);
		});
	}

	cancel(): void {
		this._route.navigate(["/user/pets"]);
	}
}
