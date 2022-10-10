import { Component, Input } from "@angular/core";

import { Card } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-cards",
	templateUrl: "./cards.component.html",
	styleUrls: ["./cards.component.scss"]
})
export class CardsComponent {
	@Input() cards: Card[] = [];
}
