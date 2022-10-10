import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogRoutingModule } from "./blog-routing.module";

import { SharedModule } from "../shared/shared.module";

// Pages
import { BlogComponent } from "./pages/blog/blog.component";
import { BlogIndexComponent } from "./pages/blog-index/blog-index.component";

// Components
import { BlogCommentsComponent } from "./components/blog-comments/blog-comments.component";
import { BlogContentComponent } from "./components/blog-content/blog-content.component";
import { BlogFilterFormComponent } from "./components/blog-filter-form/blog-filter-form.component";
import { BlogsComponent } from "./components/blogs/blogs.component";

@NgModule({
	declarations: [
		// Pages
		BlogIndexComponent,
		BlogComponent,
		// Components
		BlogCommentsComponent,
		BlogContentComponent,
		BlogFilterFormComponent,
		BlogsComponent
	],
	imports: [CommonModule, BlogRoutingModule, SharedModule]
})
export class BlogModule {}
