import { Component, Input } from '@angular/core';
import { Blog } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-blogs",
	templateUrl: "./blogs.component.html",
	styles: [
		`
			:host {
				display: block;
			}

			.blog-layout {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				flex-wrap: wrap;
				gap: 30px;
			}

			@media (min-width: 640px) {
				.blog-layout {
					flex-direction: row;

					.blog {
						flex-basis: calc(50% - 15px);
					}
				}
			}

			@media (min-width: 1280px) {
				.blog-layout {
					flex-direction: column;

					.blog {
						flex-basis: auto;
					}
				}
			}
		`
	]
})
export class BlogsComponent {
	@Input() blogs: Blog[] = [];
}
