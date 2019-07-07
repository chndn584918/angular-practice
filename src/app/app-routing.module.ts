import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/user/login/login.component';
import { FunspecialComponent } from './pages/funspecial/funspecial.component';
import { SummerFunpassComponent } from './pages/funspecial/summer-funpass/summer-funpass.component';
import { PlayComponent } from './pages/play/play.component';
import { BowlingComponent } from './pages/play/bowling/bowling.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path:'funspecials',
    component:FunspecialComponent,
    children: [
      { path: 'summer-funpass', component: SummerFunpassComponent }
    ]
  },
  {
    path:'play',
    component:PlayComponent,
    children: [
      { path: 'bowling', component: BowlingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
