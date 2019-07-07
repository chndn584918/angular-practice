import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickComponent } from './slick/slick.component';
import { ImageBannerComponent } from './image-banner/image-banner.component';
import { LtoMiddleComponent } from './lto-middle/lto-middle.component';
import { TwoColoumGridComponent } from './two-coloum-grid/two-coloum-grid.component';
import { MidBannerComponent } from './mid-banner/mid-banner.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component';


@NgModule({
  declarations: [SlickComponent, ImageBannerComponent, LtoMiddleComponent, TwoColoumGridComponent, MidBannerComponent, ImgGalleryComponent],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    SlickCarouselModule,
    SlickComponent,
    ImageBannerComponent,
    LtoMiddleComponent,
    TwoColoumGridComponent,
    MidBannerComponent,
    ImgGalleryComponent
  ]
})
export class SharedComponentModule { }
