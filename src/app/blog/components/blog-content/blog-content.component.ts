import { Component, Input } from "@angular/core";

import { Blog } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-blog-content",
	templateUrl: "./blog-content.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class BlogContentComponent {
	@Input() blog!: Blog;
}
