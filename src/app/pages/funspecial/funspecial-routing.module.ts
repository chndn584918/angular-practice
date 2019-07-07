import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunspecialComponent } from './funspecial.component';
import { SummerFunpassComponent } from './summer-funpass/summer-funpass.component';

const routes: Routes = [
  {
    path:'',
    component:FunspecialComponent,
    children: [
      { path: 'summer-funpass', component: SummerFunpassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunspecialRoutingModule { }
