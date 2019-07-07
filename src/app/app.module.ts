import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { CoreModule } from './core/core.module';
import { SharedComponentModule } from './component/shared/shared-component.module';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/user/login/login.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { HomeLocationComponent } from './pages/home/home-location/home-location.component';
import { HomeActivityComponent } from './pages/home/home-activity/home-activity.component';
import { HomeWhatsnewComponent } from './pages/home/home-whatsnew/home-whatsnew.component';
import { HomeTestimonialComponent } from './pages/home/home-testimonial/home-testimonial.component';
import { FunspecialComponent } from './pages/funspecial/funspecial.component';
import { SummerFunpassComponent } from './pages/funspecial/summer-funpass/summer-funpass.component';
import { PlayComponent } from './pages/play/play.component';
import { BowlingComponent } from './pages/play/bowling/bowling.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    BannerComponent,
    HomeLocationComponent,
    HomeActivityComponent,
    HomeWhatsnewComponent,
    HomeTestimonialComponent,
    FunspecialComponent,
    SummerFunpassComponent,
    PlayComponent,
    BowlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
