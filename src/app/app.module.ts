import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModele } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { HomeComponent } from './components/home/home.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { LineAnimationComponent } from './about/line-animation/line-animation.component';
import { ProjectsSectionComponent } from './projects-section/projects-section/projects-section.component';
import { RedesSociaisSectionComponent } from './redes-socias-section/redes-sociais-section/redes-sociais-section.component';
import { RedesSociaisAnimationComponent } from './redes-sociais-section/redes-sociais-animation/redes-sociais-animation.component';
import { FotterComponent } from './footer/fotter/fotter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModele,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
