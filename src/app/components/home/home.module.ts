import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { BtnPrimaryComponent } from "../../shared/btn-primary/btn-primary.component";
import { BrowserModule } from "@angular/platform-browser";
import { MainSectionComponent } from "src/app/main-section/main-section/main-section.component";
import { MainAnimationComponent } from "src/app/main-animation/main-animation/main-animation.component";
import { AboutSectionComponent } from "src/app/about/about-section/about-section.component";
import { LineAnimationComponent } from "src/app/about/line-animation/line-animation.component";
import { ProjectsSectionComponent } from "src/app/projects-section/projects-section/projects-section.component";
import { RedesSociaisSectionComponent } from "src/app/redes-socias-section/redes-sociais-section/redes-sociais-section.component";
import { RedesSociaisAnimationComponent } from "src/app/redes-sociais-section/redes-sociais-animation/redes-sociais-animation.component";
import { FotterComponent } from "src/app/footer/fotter/fotter.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        BtnPrimaryComponent,
        MainSectionComponent,
        MainAnimationComponent,
        AboutSectionComponent,
        LineAnimationComponent,
        ProjectsSectionComponent,
        RedesSociaisSectionComponent,
        RedesSociaisAnimationComponent,
        FotterComponent
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