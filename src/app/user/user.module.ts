import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";

import { SharedModule } from "../shared/shared.module";

// Pages
import { PersonalComponent } from "./pages/personal/personal.component";
import { UserIndexComponent } from "./pages/user-index/user-index.component";

// Components
import { HeaderUserComponent } from "./components/header-user/header-user.component";
import { PanelAccountComponent } from "./components/panel-account/panel-account.component";
import { PanelPersonalComponent } from "./components/panel-personal/panel-personal.component";

@NgModule({
	declarations: [
		// Pages
		PersonalComponent,
		UserIndexComponent,
		// Components
		HeaderUserComponent,
		PanelAccountComponent,
		PanelPersonalComponent
	],
	imports: [CommonModule, UserRoutingModule, SharedModule]
})
export class UserModule {}
