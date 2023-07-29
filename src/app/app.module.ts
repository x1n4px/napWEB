import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PecesComponent } from './component/otros/peces/peces.component';
 import { ContinenteGlobalComponent } from './component/continente-global/continente-global.component';
 import { BiotopoPageComponent } from './component/biotopo-page/biotopo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PecesComponent,
     ContinenteGlobalComponent,
     BiotopoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
