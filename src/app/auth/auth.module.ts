import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";

import { SharedModule } from "../shared/shared.module";

// Pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Components

@NgModule({
	declarations: [
		// Pages
		LoginComponent,
		RegisterComponent
		// Components
	],
	imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
