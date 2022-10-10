import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccordionModule } from "primeng/accordion";
import { AvatarModule } from "primeng/avatar";
import { CalendarModule } from "primeng/calendar";
import { DividerModule } from "primeng/divider";
import { FieldsetModule } from "primeng/fieldset";
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { PanelModule } from "primeng/panel";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from "primeng/sidebar";
import { TabViewModule } from "primeng/tabview";

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [AccordionModule, AvatarModule, CalendarModule, DividerModule, FieldsetModule, InputNumberModule, InputTextareaModule, InputTextModule, MessageModule, MessagesModule, PanelModule, PasswordModule, RadioButtonModule, SidebarModule, TabViewModule]
})
export class PrimeNgModule {}
