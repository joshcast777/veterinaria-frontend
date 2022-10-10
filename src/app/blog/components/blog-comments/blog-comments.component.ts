import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";

import { Message } from "primeng/api";
import { Observable, switchMap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { BlogComment } from "src/app/interfaces/app.interface";
import { AppService } from "src/app/services/app.service";
import { BlogService } from "../../blog.service";

@Component({
	selector: "cmp-blog-comments",
	templateUrl: "./blog-comments.component.html",
	styles: [
		`
			:host {
				display: block;
			}
		`
	]
})
export class BlogCommentsComponent implements OnInit {
	private blogId: number = 0;
	private _blogComments: BlogComment[] = [];
	private _validatedToken: boolean = false;
	messageLogin: Message[] = [];
	messageComments: Message[] = [];

	myForm: FormGroup = this.form_builder.group({
		comment: [, [Validators.required, Validators.minLength(15)]]
	});

	constructor(private _activatedRoute: ActivatedRoute, private _appService: AppService, private blogService: BlogService, private form_builder: FormBuilder, private authService: AuthService) {}

	ngOnInit(): void {
		this.authService.validateToken().subscribe((validatedToken: boolean): boolean => (this._validatedToken = validatedToken));

		this._activatedRoute.params.pipe(switchMap(({ id }: Params): Observable<BlogComment[]> => {
			this.blogId = id;
			return this.blogService.getCommentsByBlogId(id)
		})).subscribe((blogComments: BlogComment[]): BlogComment[] => (this._blogComments = blogComments));

		this.messageLogin = [
			{
				severity: "warn",
				summary: "Advertencia",
				detail: "Inicie sesión para comentar"
			}
		];

		this.messageComments = [
			{
				severity: "info",
				summary: "Información",
				detail: "No hay comentarios a mostrar"
			}
		];
	}

	public get BlogComments(): BlogComment[] {
		return [...this._blogComments.reverse()];
	}

	comment(): void  {
		let comment = this.myForm.value;
		comment.userId = this._appService.User.userId;
		comment.blogId = this.blogId;

		this.blogService.saveComment(comment).subscribe((response: string): void => {
			if (response === "OK") window.location.reload();
		});
	}

	get ValidatedToken(): boolean {
		return this._validatedToken;
	}
}
