import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
 import { PhumduangComponent } from './component/biotopos/phumduang/phumduang.component';
 import { ContinenteGlobalComponent } from './component/continente-global/continente-global.component';
import { ManacapuruComponent } from './component/biotopos/manacapuru/manacapuru.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'phumduang', component: PhumduangComponent },
  {
    path: 'continente/:nombre', component: ContinenteGlobalComponent,

  },
  { path: 'Manacapuru', component: ManacapuruComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
