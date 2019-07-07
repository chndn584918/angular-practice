import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play.component';
import { BowlingComponent } from './bowling/bowling.component';

const routes: Routes = [
  {
    path:'',
    component:PlayComponent,
    children: [
      { path: 'bowling', component: BowlingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
