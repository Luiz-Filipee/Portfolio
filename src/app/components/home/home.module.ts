import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { BtnPrimaryComponent } from "../../shared/btn-primary/btn-primary.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BtnPrimaryComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {}