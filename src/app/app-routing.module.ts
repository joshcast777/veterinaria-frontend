import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from "./user/user.guard";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
	{
		path: "blog",
		loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule)
	},
	{
		path: "auth",
		loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
		canActivate: [AuthGuard],
		canLoad: [AuthGuard]
	},
	{
		path: "user",
		loadChildren: () => import("./user/user.module").then(m => m.UserModule),
		canActivate: [UserGuard],
		canLoad: [UserGuard]
	},
	{
		path: "page-not-found",
		loadChildren: () => import("./page-not-found/page-not-found.module").then(m => m.PageNotFoundModule)
	},
	{
		path: "",
		loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
	},
	{
		path: "**",
		redirectTo: "page-not-found"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
