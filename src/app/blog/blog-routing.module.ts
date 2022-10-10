import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlogIndexComponent } from "./pages/blog-index/blog-index.component";
import { BlogComponent } from "./pages/blog/blog.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{ path: "", component: BlogIndexComponent },
			{ path: ":id", component: BlogComponent },
			{ path: "**", redirectTo: "/page-not-found" }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BlogRoutingModule {}
