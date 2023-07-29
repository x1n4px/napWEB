import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
 import { ContinenteGlobalComponent } from './component/continente-global/continente-global.component';
 import { BiotopoPageComponent } from './component/biotopo-page/biotopo-page.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
   {
    path: 'continente/:nombre', component: ContinenteGlobalComponent
  },
  { path: 'continente/:nombre/:biotopos', component: BiotopoPageComponent },
   { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
