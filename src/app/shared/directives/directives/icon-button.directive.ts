import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
	selector: "[dtvIconButton]"
})
export class IconButtonDirective {
	@Input() primeIcon: string = "";

	private element: ElementRef<HTMLElement>;

	constructor(element: ElementRef<HTMLElement>) {
		this.element = element;
	}

	ngOnInit(): void {
		this.buttonStyles();
	}

	private buttonStyles(): void {
		this.element.nativeElement.classList.add("icon-btn");
		this.element.nativeElement.innerHTML = `<i class="pi ${this.primeIcon}"></i>`;
	}
}
