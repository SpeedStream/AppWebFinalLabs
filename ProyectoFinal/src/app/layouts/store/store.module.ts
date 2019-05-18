// Core Dependencies
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

// configuration and services
import { StoreRoutes } from "./store.routing";

// Components
import { CreateStoreComponent } from "./new-store/new-store.component";

@NgModule({
	imports: [CommonModule, SharedModule, RouterModule.forChild(StoreRoutes)],
	declarations: [
		CreateStoreComponent
	]
})
export class StoreModule { }
