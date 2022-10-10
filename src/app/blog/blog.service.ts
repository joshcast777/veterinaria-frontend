import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Blog, BlogComment } from "../interfaces/app.interface";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root"
})
export class BlogService {
	private urlApi: string = environment.urlApi;

	constructor(private http: HttpClient) {}

	getBlogs(): Observable<Blog[]> {
		return this.http.get<Blog[]>(`${this.urlApi}/api/Blog`);
	}

	getBlogById(id: string): Observable<Blog> {
		return this.http.get<Blog>(`${this.urlApi}/api/Blog/${id}`);
	}

	getCommentsByBlogId(id: number): Observable<BlogComment[]> {
		return this.http.get<BlogComment[]>(`${this.urlApi}/api/BlogComment/ByBlogId/${id}`);
	}

	saveComment(comment: BlogComment): Observable<string> {
		return this.http.post<string>(`${this.urlApi}/api/BlogComment`, comment);
	}
}
