import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable, switchMap } from "rxjs";

import { BlogService } from "../../blog.service";
import { Blog, BlogComment } from "../../../interfaces/app.interface";

@Component({
	selector: "cmp-blog",
	template: `
		<div class="max-w-5xl mx-auto px-2">
			<cmp-blog-content [blog]="Blog"></cmp-blog-content>

			<cmp-section-divider></cmp-section-divider>

			<cmp-blog-comments></cmp-blog-comments>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;

				::ng-deep .text-are {
					@apply p-2;
				}
			}
		`
	]
})
export class BlogComponent {
	private _blog!: Blog;

	constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) {}

	ngOnInit(): void {
		this.activatedRoute.params.pipe(switchMap(({ id }: Params): Observable<Blog> => this.blogService.getBlogById(id))).subscribe((blog: Blog): Blog => (this._blog = blog));
	}

	public get Blog(): Blog {
		return { ...this._blog };
	}
}
