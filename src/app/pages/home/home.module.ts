import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { HomeLocationComponent } from './home-location/home-location.component';
import { HomeActivityComponent } from './home-activity/home-activity.component';
import { HomeWhatsnewComponent } from './home-whatsnew/home-whatsnew.component';
import { HomeTestimonialComponent } from './home-testimonial/home-testimonial.component';

import { SharedComponentModule } from '../../component/shared/shared-component.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    HomeLocationComponent,
    HomeActivityComponent,
    HomeWhatsnewComponent,
    HomeTestimonialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentModule
  ],
  exports: [
    HomeComponent,
    BannerComponent,
    HomeLocationComponent,
    HomeActivityComponent,
    HomeWhatsnewComponent,
    HomeTestimonialComponent
  ]
})
export class HomeModule { }
