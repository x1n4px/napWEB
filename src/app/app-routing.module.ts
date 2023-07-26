import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AsiaComponent } from './component/continentes/asia/asia.component';
import { PhumduangComponent } from './component/biotopos/phumduang/phumduang.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'asia', component: AsiaComponent
  },
  { path: 'phumduang', component: PhumduangComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
