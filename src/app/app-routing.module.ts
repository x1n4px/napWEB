import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AsiaComponent } from './component/continentes/asia/asia.component';
import { PhumduangComponent } from './component/biotopos/phumduang/phumduang.component';
import { AmericaComponent } from './component/continentes/america/america.component';
import { AfricaComponent } from './component/continentes/africa/africa.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'asia', component: AsiaComponent
  },
  {path: 'america', component: AmericaComponent},
  {path: 'africa', component: AfricaComponent},

  { path: 'phumduang', component: PhumduangComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
