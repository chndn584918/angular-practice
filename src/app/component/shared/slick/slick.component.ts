import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.less']
})
export class SlickComponent implements OnInit {

  @Input() imgurls : string[];
  slides: string[];
  slideConfig: { "slidesToShow": number; "slidesToScroll": number; "nextArrow": string; "prevArrow": string; "dots": boolean; "infinite": boolean; };

  constructor() { }

  ngOnInit() {
    this.slides = this.imgurls;
    this.slideConfig = {
      "slidesToShow": 1, 
      "slidesToScroll": 1,
      "nextArrow":"<div class='nav-btn next-slide'></div>",
      "prevArrow":"<div class='nav-btn prev-slide'></div>",
      "dots":false,
      "infinite": false
    };
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
