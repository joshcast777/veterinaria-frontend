import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Módulos
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";
import { ModulesModule } from "../modules/modules.module";

// Componentes
import { CardsComponent } from "./components/cards/cards.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderNavComponent } from "./components/header-nav/header-nav.component";
import { HeaderPageComponent } from "./components/header-page/header-page.component";
import { SectionDividerComponent } from "./components/section-divider/section-divider.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SocialLinksComponent } from "./components/social-links/social-links.component";
import { TextImageComponent } from "./components/text-image/text-image.component";
import { TitleComponent } from "./components/title/title.component";

@NgModule({
	declarations: [CardsComponent, FooterComponent, HeaderNavComponent, HeaderPageComponent, SectionDividerComponent, SidebarComponent, SocialLinksComponent, TextImageComponent, TitleComponent],
	imports: [CommonModule, RouterModule, DirectivesModule, PipesModule, ModulesModule],
	exports: [CardsComponent, FooterComponent, HeaderNavComponent, HeaderPageComponent, SectionDividerComponent, SidebarComponent, SocialLinksComponent, TextImageComponent, TitleComponent]
})
export class ComponentsModule {}
