import { Component, ElementRef, ViewChild } from "@angular/core";

import { BlogService } from "../../blog.service";
import { Blog } from "src/app/interfaces/app.interface";

@Component({
	selector: "cmp-blog-index",
	templateUrl: "./blog-index.component.html",
	styles: [
		`
			:host {
				display: block;

				::ng-deep .field-toggle .p-fieldset-content {
					@apply p-3;
				}
			}

			@media (min-width: 1024px) {
				.form-container {
					transition: width 0.3s;
				}

				.side-button {
					transition: transform 0.3s;
				}

				.form {
					transition: opacity 0.3s;
				}
			}
		`
	]
})
export class BlogIndexComponent {
	@ViewChild("formContainer") formContainer!: ElementRef<HTMLElement>;
	@ViewChild("form") form!: ElementRef<HTMLElement>;
	@ViewChild("sideButton") sideButton!: ElementRef<HTMLElement>;

	private _blogs: Blog[] = [];

	toggle: boolean = false;

	constructor(private blogService: BlogService) {}

	ngOnInit(): void {
		this.blogService.getBlogs().subscribe((blogs: Blog[]): Blog[] => (this._blogs = blogs));
	}

	get Blogs(): Blog[] {
		return [...this._blogs];
	}

	toggleSidePanel(): void {
		if (this.toggle) {
			this.toggle = false;

			this.formContainer.nativeElement.classList.remove("lg:w-72");
			this.formContainer.nativeElement.classList.add("lg:w-24");

			this.sideButton.nativeElement.classList.remove("lg:rotate-180");

			this.form.nativeElement.classList.remove("lg:opacity-100");
			this.form.nativeElement.classList.add("lg:opacity-0");
		} else {
			this.toggle = true;

			this.formContainer.nativeElement.classList.remove("lg:w-24");
			this.formContainer.nativeElement.classList.add("lg:w-72");

			this.sideButton.nativeElement.classList.add("lg:rotate-180");

			this.form.nativeElement.classList.remove("lg:opacity-0");
			this.form.nativeElement.classList.add("lg:opacity-100");
		}
	}
}
