import { Component, Input } from "@angular/core";

import { Layout, TextImage } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-text-image",
	templateUrl: "./text-image.component.html",
	styleUrls: ["./text-image.component.scss"]
})
export class TextImageComponent {
	@Input() layout: Layout = {
		layout: "middle-layout",
		imageShape: "image-c",
		reverse: false,
		imageShapeReverse: "image-c"
	};

	@Input() textImage: TextImage = {
		title: "Title",
		boldTitle: "Bold title",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis labore nam numquam eos officia, beatae cupiditate dignissimos autem deserunt tempora nulla error facere quo. Quae harum fugit maiores earum?",
		button: null,
		imagePath: "image.png"
	};

	layouts(): string {
		return this.layout.layout! + (this.layout.reverse ? " reverse md:text-right" : "");
	}

	imageShape(): string {
		return this.layout.reverse! ? this.layout.imageShapeReverse! : this.layout.imageShape!;
	}
}
