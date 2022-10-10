import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
	selector: "[dtvTextButton]"
})
export class TextButtonDirective implements OnInit {
	@Input() label: string = "Button";
	@Input() color: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "danger" = "primary";
	@Input() design: "text" | "outlined" | "filled" = "text";

	private element: ElementRef<HTMLElement>;

	constructor(element: ElementRef<HTMLElement>) {
		this.element = element;
	}

	ngOnInit(): void {
		this.buttonStyles();
	}

	private buttonStyles(): void {
		this.element.nativeElement.classList.add("text-btn", `btn-${this.design}-${this.color}`);
		this.element.nativeElement.innerHTML = `<span>${this.label}</span>`;
	}
}
