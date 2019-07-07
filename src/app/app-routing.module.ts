import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/user/login/login.component';

import { PlayComponent } from './pages/play/play.component';
import { BowlingComponent } from './pages/play/bowling/bowling.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadChildren:'../app/pages/home/home.module#HomeModule'
  },
  {
    path:'funspecials',
    loadChildren:'../app/pages/funspecial/funspecial.module#FunspecialModule'
  },
  {
    path:'play',
    loadChildren:'../app/pages/play/play.module#PlayModule'
  },
  {
    path:'user',
    component:UserComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
