import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { BtnPrimaryComponent } from "../../shared/btn-primary/btn-primary.component";
import { BrowserModule } from "@angular/platform-browser";
import { MainSectionComponent } from "src/app/main-section/main-section/main-section.component";
import { MainAnimationComponent } from "src/app/main-animation/main-animation/main-animation.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BtnPrimaryComponent,
        MainSectionComponent,
        MainAnimationComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        HomeComponent
    ],
})
export class HomeModule {}