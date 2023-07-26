import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AmericaComponent } from './component/continentes/america/america.component';
import { AsiaComponent } from './component/continentes/asia/asia.component';
import { AfricaComponent } from './component/continentes/africa/africa.component';
import { EuropaComponent } from './component/continentes/europa/europa.component';
import { PecesComponent } from './component/otros/peces/peces.component';
import { PhumduangComponent } from './component/biotopos/phumduang/phumduang.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AmericaComponent,
    AsiaComponent,
    AfricaComponent,
    EuropaComponent,
    PecesComponent,
    PhumduangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
